#gulp-kre

:construction: Gulp task runner for K Runtime Environent: https://github.com/aspnet/KRuntime

This is work in progress [WIP].

##Installation

TBD. This is installed locally as for now

##Usage

In your `Gulp` file use `kre` in this way:

```
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var kre = require('gulp-kre');

gulp.task('build', function() {
  console.log('### build ###');
  kre.build();
})
gulp.task('restore', function() {
  console.log('### restore ###');
  kre.restore();
});
//
gulp.task('serve', function() {
  kre.serve();
});
//
gulp.task('run', function() {
  kre.run();
});
//
gulp.task('default', function() {
  runSequence('restore', 'build');
});
```

Running `gulp` (default task) will result spawn child process(es) `kpm restore` and `kpm build`:

```
gulp
[23:04:31] Using gulpfile ~/projects/test-kre/Gulpfile.js
[23:04:31] Starting 'default'...
[23:04:31] Starting 'restore'...
### restore ###
[23:04:31] Finished 'restore' after 4.05 ms
[23:04:31] Starting 'build'...
### build ###
[23:04:31] Finished 'build' after 1.72 ms
[23:04:31] Finished 'default' after 8.11 ms
Building test-kre for Asp.Net,Version=v5.0
Restoring packages for
/Users/piotrblazejewicz/projects/test-kre/project.json
CACHE https://www.nuget.org/api/v2/FindPackagesById()?Id='System.Console'
CACHE https://www.nuget.org/api/v2/FindPackagesById()?Id='System.IO'
CACHE https://www.nuget.org/api/v2/FindPackagesById()?Id='System.Text.Encoding'
CACHE https://www.nuget.org/api/v2/FindPackagesById()?Id='System.Threading.Tasks'
CACHE https://www.nuget.org/api/v2/FindPackagesById()?Id='System.Runtime'
Resolving complete, 488ms elapsed
Restore complete, 492ms elapsed
Using Project dependency test-kre 1.0.0
Source: /Users/piotrblazejewicz/projects/test-kre/project.json

  Using Assembly dependency gac/mscorlib 4.0.0.0
    Source: /usr/local/Cellar/mono/3.10.0/lib/mono/4.5/mscorlib.dll

  Using Assembly dependency gac/System 4.0.0.0
    Source: /usr/local/Cellar/mono/3.10.0/lib/mono/4.5/System.dll

  Using Assembly dependency gac/System.Core 4.0.0.0
    Source: /usr/local/Cellar/mono/3.10.0/lib/mono/4.5/System.Core.dll

  Using Assembly dependency gac/Microsoft.CSharp 4.0.0.0
    Source: /usr/local/Cellar/mono/3.10.0/lib/mono/4.5/Microsoft.CSharp.dll
Building test-kre for Asp.NetCore,Version=v5.0
Using Project dependency test-kre 1.0.0
    Source: /Users/piotrblazejewicz/projects/test-kre/project.json

  Using Package dependency System.Console 4.0.0-beta-22231
Source: /Users/piotrblazejewicz/.kpm/packages/System.Console/4.0.0-beta-22231
File: lib/contract/System.Console.dll
Using Package dependency System.IO 4.0.10-beta-22231
    Source: /Users/piotrblazejewicz/.kpm/packages/System.IO/4.0.10-beta-22231
File:
lib/contract/System.IO.dll

  Using Package dependency System.Runtime 4.0.20-beta-22231
    Source: /Users/piotrblazejewicz/.kpm/packages/System.Runtime/4.0.20-beta-22231
File: lib/contract/System.Runtime.dll
Using Package dependency System.Text.Encoding 4.0.10-beta-22231
    Source: /Users/piotrblazejewicz/.kpm/packages/System.Text.Encoding/4.0.10-beta-22231
File: lib/contract/System.Text.Encoding.dll
Using Package dependency System.Threading.Tasks 4.0.10-beta-22231
    Source: /Users/piotrblazejewicz/.kpm/packages/System.Threading.Tasks/4.0.10-beta-22231
File: lib/contract/System.Threading.Tasks.dll
test-kre -> /Users/piotrblazejewicz/projects/test-kre/bin/Debug/test-kre.1.0.0.nupkg
test-kre -> /Users/piotrblazejewicz/projects/test-kre/bin/Debug/test-kre.1.0.0.symbols.nupkg
Build succeeded.
0 Warnings(s)
    0 Error(s)
Time elapsed 00:00:02.2728944
```