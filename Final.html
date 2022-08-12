<?php
    $msg = "";

    if (isset($_POST['submit'])) {
        $full_name = $_POST['full_name'];
        $email = $_POST['email'];
        $url = $_POST['url'];
        $password = $_POST['password'];
        $cpassword = $_POST['cpassword'];

        if (empty($full_name) || empty($email) || empty($url) || empty($password) || empty($cpassword)) {
            $msg = "<div class='alert alert-danger'>All fields are required.</div>";
        }else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $msg = "<div class='alert alert-danger'>Enter a valid email.</div>";
            }else {
                if (!filter_var($url, FILTER_VALIDATE_URL)) {
                    $msg = "<div class='alert alert-danger'>Enter a valid url.</div>";
                }else {
                    if ($password !== $cpassword) {
                        $msg = "<div class='alert alert-danger'>Password and confirm password do not match.</div>";
                    }else {
                        $msg = "<div class='alert alert-success'>Register successfully completed.</div>";
                        $full_name = "";
                        $email = "";
                        $url = "";
                        $password = "";
                        $cpassword = "";
                    }
                }
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form Validation PHP - Brave Coder</title>
</head>
<body>
    <div class="wrapper">
        <h2 class="title">Register</h2>
        <?php echo $msg; ?>
        <form action="" method="post" class="form">
            <div class="input-field">
                <label for="full_name" class="input-label">Full Name</label>
                <input type="text" name="full_name" class="input" id="full_name" placeholder="Enter your full name" value="<?php if (isset($_POST['submit'])) { echo $full_name; } ?>">
            </div>
            <div class="input-field">
                <label for="email" class="input-label">Email</label>
                <input type="text" name="email" class="input" id="email" placeholder="Enter your email" value="<?php if (isset($_POST['submit'])) { echo $email; } ?>">
            </div>
            <div class="input-field">
                <label for="website" class="input-label">Website</label>
                <input type="text" name="url" class="input" id="website" placeholder="Enter your website" value="<?php if (isset($_POST['submit'])) { echo $url; } ?>">
            </div>
            <div class="input-field">
                <label for="password" class="input-label">Password</label>
                <input type="password" name="password" class="input" id="password" placeholder="Enter your password" value="<?php if (isset($_POST['submit'])) { echo $password; } ?>">
            </div>
            <div class="input-field">
                <label for="cpassword" class="input-label">Confirm Password</label>
                <input type="password" name="cpassword" class="input" id="cpassword" placeholder="Enter confirm password" value="<?php if (isset($_POST['submit'])) { echo $cpassword; } ?>">
            </div>
            <button type="submit" name="submit" class="btn">Register</button>
        </form>
    </div>
</body>
</html>