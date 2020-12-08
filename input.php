
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .button {
                background-color: #4caf50; /* Green */
                border: none;
                color: white;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
            }
            
        </style>
    </head>
    <form method="post"  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <body>
            <input type="text" name="pwd" style="background-color: #fff7f7; border: 1px solid #ea0000" value="" />
            <input type="button" class="button" value="확인" />
        </body>
    </form>
</html>
