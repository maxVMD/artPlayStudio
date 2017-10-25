<?
require_once 'db.php';
$data = json_decode(file_get_contents('php://input'), true);


$sql="INSERT INTO zajavki SET fio='".$data['name']."' , mail='".$data['email']."', tel='".$data['phone']."' , course='".$data['category']."'";
$conn->query($sql);
$err=$conn->error;

$sql="SELECT title,type FROM courses WHERE id=".$data['category'];
$res=$conn->query($sql);
$res=$res->fetch_assoc();
//письмо клиенту
$mail=$data['email'];
$mailheaders  = "Content-type: text/html; charset=UTF-8 \r\n"; 
$mailheaders .= "From: ArtPlay <no-reply.artplay.by>\r\n";            
$subject = "Заявка ArtPlay";
$msg="<p>Ваша заявка на курс '".$res['title']."' принята, с Вами вскоре свяжется администратор.</p>";
$msg.="<p style='font-size=11px; color:grey;'>Это письмо сформировано автоматически, не отвечайте на него.<p>";
mail($mail,$subject,$msg,$mailheaders);
//письмо админу
$mail='imperiumbee@gmail.com';
$mailheaders  = "Content-type: text/html; charset=UTF-8 \r\n"; 
$mailheaders .= "From: ArtPlay <no-reply.artplay.by>\r\n";            
$subject = "Заявка ArtPlay";
$msg='ФИО: '.$data['name'];
$msg.='<br>E-mail: '.$data['email'];
$msg.='<br>Телефон: +375'.$data['phone'];
if ($res['type']=='o') {
	$age='Взрослый';
}else{$age='Детский';}
$msg.='<br>Курс: '.$res['title'].'('.$age.')';
$msg.='<br> <a href="'. $_SERVER['SERVER_NAME'].'/zajavki.php">Все заявки</a>';
mail($mail,$subject,$msg,$mailheaders);
if ($err=='') {
	echo json_encode('success');
}else{
	echo json_encode($err);
}
?>