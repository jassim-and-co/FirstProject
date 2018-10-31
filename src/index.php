<?php
/**
 * Created by PhpStorm.
 * User: jassim
 * Date: 10/19/18
 * Time: 6:12 PM
 */


$dat = date("d.m y");
$tm = date("h:i:s");

echo "Текущая дата: $dat года <br />\n";
echo "Текущее время: $tm <br />\n";


for ($i = 1; $i <= 5; $i++) {
    echo "<li> $i в квадрате = " . ($i * $i);
    echo ", $i в кубе = " . ($i * $i * $i) . "</li> \n";
}