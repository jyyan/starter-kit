<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lumen + React</title>
</head>
<body>
    <div id="myApp"></div>
    @if(env('APP_ENV') === 'local')
        <script src="//localhost:8080/bundle.js" type="text/javascript"></script>
    @else
        Production
        <script src="./bundle.js" type="text/javascript"></script>
    @endif
</body>
</html>
