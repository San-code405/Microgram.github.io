<?php
    $conn = mysql_connect("localhost", "root" ,"");
    mysql_select_db(/*'database_name'*/,$conn);
 
    $select = "SELECT * FROM logs ORDER BY id DESC";
    
    $rs=mysql_query($select);
    
    $count = mysql_num_rows($rs);
    
    if($count>0){
      while($row = mysql_fetch_array($rs)){
        echo $row['username'] . " : " $row['msg'] . <br>;
      }
    }


?>