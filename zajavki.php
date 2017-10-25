<?
require_once 'db.php';
session_start();
if(isset($_POST['submit'])) {
  if (($_POST['login']=='root')&&($_POST['pass']=='unisite')) {
    $_SESSION['act']=md5(md5($_POST['pass']));
  }
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
    <title>Заявки</title>
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
    @media print
    {
      .no-print, .no-print *
      {
        display: none !important;
      }
    }
    </style>
  </head>
  <body>
    <? if ($_SESSION['act']!=md5(md5('unisite'))) {
    
    ?>
    <link href="css/signin.css" rel="stylesheet">
    <div class="container">
      <form class="form-signin" method="post">
        <h2 class="form-signin-heading">Вход</h2>
        <label for="inputEmail" class="sr-only">login</label>
        <input type="text" id="inputEmail" name="login" class="form-control" placeholder="логин" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" name="pass" class="form-control" placeholder="пароль" required>
        <button class="btn btn-lg btn-primary btn-block" value="Submit" name="submit" type="submit">Войти</button>
      </form>
    </div>
    <?} else{?>
    <div class="container">
      <h2 class="sub-header">Заявки</h2>
      <select id="courses" class="form-control">
        <?$sql="SELECT id,title,type from courses group by title having count(1)=1 ORDER BY id";
          $res=$conn->query($sql);
          $html="";
          while ($row=$res->fetch_assoc()) {
            $html.='<option value="'.$row['id'].'">'.$row['title'].'</option>';
          
          }
          $sql="SELECT id,title,type from courses where title in (
                select title from courses
                group by title having count(*) > 1
                )";
          $res=$conn->query($sql);
          
          while ($row=$res->fetch_assoc()) {
            if ($row['type']=='o') {
              $type=' (ВЗРОСЛЫЙ)';
            }else{
              $type=' (ДЕТСКИЙ)';
            }
            $html.='<option value="'.$row['id'].'">'.$row['title'].$type.'</option>';
          }
          echo $html;
        ?>
      </select>
      <input type="button" style="margin-top:5px;" onclick="window.print();" class="form-control btn btn-success no-print" value="Печать">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>ФИО</th>
              <th>E-mail</th>
              <th>Телефон</th>
              <th>Курс</th>
              <th>Дата подачи</th>
            </tr>
          </thead>
          <tbody id="res">
            
          </tbody>
        </table>
      </div>
    </div><?}?>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script>
    $( document ).ready(function() {
    sel=$('#courses option:selected').val();
    $.ajax({
    url: "actions.php",
    type:"POST",
    data:"t=c&c="+sel,
    success: function(result){
    $("#res").html(result);
    }});
    });
    $('#courses').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    $.ajax({
    url: "actions.php",
    type:"POST",
    data:"t=c&c="+valueSelected,
    success: function(result){
    $("#res").html(result);
    }});
    });
    </script>
  </body>
</html>