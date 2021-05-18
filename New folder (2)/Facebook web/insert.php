<?php
  &uname = $_REQUEST['uname'];
  &msg = $_REQUEST['msg'];
  
  $conn = mysql_connect("localhost", "root" ,"");
  mysql_select_db(/*'database_name'*/,$conn);
  
  $insert = "INSERT /*Tables name*/ SET
    username = '$uname';
    msg = '$msg';";
    
    mysql_query($insert);
    
    

?>