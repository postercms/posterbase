const path = require('path');
const { spawn } = require('child_process');
const projects = require('../rush.json').projects;

projects.forEach(project => {
  if (project.projectFolder === '.' || project.reviewCategory !== 'library') {
    return;
  }
  const dir = path.resolve(__dirname, '..', project.projectFolder);
  const pkg = require(dir + '/package.json');
  if (Object.keys(pkg.scripts).includes('build:w')) {
    watchBuild(project.packageName, dir);
  }
});

function watchBuild(projectName, projectDir) {
  const logMsg = msg => {
    console.log(`${projectName}: ${msg}`);
  };

  const buildWatcher = spawn('npm', ['run', 'build:w'], {
    cwd: projectDir,
    detached: true,
  });

  buildWatcher.stdout.on('data', function(data) {
    logMsg(data);
  });

  buildWatcher.stderr.on('data', data => {
    logMsg(`stderr: ${data}`);
  });

  buildWatcher.on('close', code => {
    logMsg(`Process exited with code ${code}`);
  });
}
