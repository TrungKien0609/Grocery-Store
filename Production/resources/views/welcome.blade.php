<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/favicon.png" type="image/x-icon" />
    <title>NeikStore Vuejs & Laravel Project</title>
</head>

<body>
    <div id="app">
        <app></app>
    </div>
    <script src="{{mix('js/app.js')}}"></script>
</body>
</html>
