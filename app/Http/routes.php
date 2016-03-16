<?php

$app->get('/', function () use ($app) {
    return view('index');
});
$app->get('/{one}', function () use ($app) {
    return view('index');
});
