<?php 
echo 'hi';
//    echo file_get_contents('php://input');
//    echo json_decode(file_get_contents('php://input',true));
//    print_r( json_decode(file_get_contents('php://input')) );
   $data = json_decode(file_get_contents('php://input',true));
   

//     echo '<pre>';
    // print_r($_REQUEST);
//     print_r($_GET);
    // die;

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        //header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    echo "You have CORS!";
    // print_r($data);
    // print_r($data->data->fname);
    
    $my_data = $data->data;
 
//    die;


  $username = "root";
  $password = "";
  try {
  $conn = new PDO("mysql:host=localhost;dbname=portfolio", $username, $password);

 
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
  echo '<pre>';
  } 
  
  catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
  }

    $fname   = $my_data->fname;
    $lname   = $my_data->lname;
    $email   = $my_data->email;
    $submsg  = $my_data->msg_obj;
    $msg     = $my_data->message;

        echo $fanme;
        
    $stmt = $conn->prepare("INSERT INTO Contact_US 
    (F_name, L_name, Emails, Subject_msg, Message) VALUES 
    (:fname, :lname, :email, :submsg, :msg)");

    $stmt->bindParam(':fname', $fname);
    $stmt->bindParam(':lname', $lname);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':submsg', $submsg);
    $stmt->bindParam(':msg', $msg);

    $fname = $fname;
    $lname = $lname;
    $email = $email;
    $submsg = $submsg;
    $msg = $msg;
    $stmt->execute();


    // if(mysqli_query($PDO,$query))
    // {
        echo("Data has Ben Inserted Successfully");
    // }

    // else{
    //     echo"Error!";
    // }
 
?>

