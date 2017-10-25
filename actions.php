<?
header('Content-type: text/html');
header('Access-Control-Allow-Origin: *');
require_once 'db.php';

function rus_date($val)
{
$rus_months = array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
  $newDatetime = new Datetime($val);
  $month = $newDatetime->format('n');
  $album_data = $newDatetime->format('j '.$rus_months[$month-1].'');
  $album_data .= $newDatetime->format('Y г., H:m');
  if (($newDatetime->format('H:i:s')) == '00:00:00')
  {
      $album_data = $newDatetime->format('j '.$rus_months[$month-1].'');
      // $album_data .= $newDatetime->format('Y г.');
   }
      return $album_data;
}

if ($_GET['t']=='mission') {
	$sql="SELECT url FROM images WHERE type='mission'";
	$res=$conn->query($sql);
	$jsonR=array();
	while ($row=$res->fetch_assoc()) {
		$jsonRow = array("url"=>$row['url']);
		array_push($jsonR,$jsonRow);
	}
	
	echo json_encode($jsonR,true);
	
}

if ($_GET['t']=='atmos') {
	$sql="SELECT url FROM images WHERE type='atmos'";
	$res=$conn->query($sql);
	$jsonR=array();
	while ($row=$res->fetch_assoc()) {
		$jsonRow = array("url"=>$row['url']);
		array_push($jsonR,$jsonRow);
	}
	echo json_encode($jsonR,true);

}

// if (($_GET['t']=='articles')&&(!isset($_GET['i']))) {
// 	$sql="SELECT * FROM articles";
// 	$res=$conn->query($sql);
// 	$jsonR=array("articles"=>array());
// 	while ($row=$res->fetch_assoc()) {
// 		$jsonRow = array(
// 			"id"=>$row['id'],
// 		    "img"=>$row['img'],
// 		    "date"=>rus_date($row['date']),
// 		    "title"=>$row['title'],
// 		    "text_preview"=>$row['text_preview'],
// 		    "text"=>$row['text']
// 			);
// 		array_push($jsonR["articles"],$jsonRow);
// 	}
// 	echo json_encode($jsonR);
// }
// if (($_GET['t']=='articles')&&(isset($_GET['i']))) {
// 	$sql="SELECT * FROM img_art WHERE id_art=".$_GET['i'];
// 	$res=$conn->query($sql);
// 	$jsonR=array("images"=>array());
// 	while ($row=$res->fetch_assoc()) {
// 		$jsonRow = array(
// 		    "img"=>$row['url']
// 			);
// 		array_push($jsonR["images"],$jsonRow);
// 	}
// 	echo json_encode($jsonR);
// }
if ($_GET['t']=='articles') {
	$sql="SELECT * FROM articles";
	$res=$conn->query($sql);
	$jsonR=array("articles"=>array());
	
	while ($row=$res->fetch_assoc()) {
		$img=array();
		$sql1="SELECT * FROM img_art WHERE id_art=".$row['id'];
		$res1=$conn->query($sql1);
		while ($row1=$res1->fetch_assoc()) {
			array_push($img, $row1['url']);
		}

		$jsonRow = array(
			"id"=>$row['id'],
		    "img"=>$row['img'],
		    "images"=>$img,
		    "date"=>$row['date'],
		    "title"=>$row['title'],
		    "text_preview"=>$row['text_preview'],
		    "text"=>$row['text']
			);
		array_push($jsonR["articles"],$jsonRow);
	}
	
	 echo json_encode($jsonR);
}
if ($_GET['t']=='team') {
	$sql="SELECT * FROM team";
	$res=$conn->query($sql);
	$jsonR=array("team"=>array());
	while ($row=$res->fetch_assoc()) {
		$jsonRow = array(
			"id"=>$row['id'],
		    "img"=>$row['img'],
		    "name"=>$row['name'],
		    "prof"=>$row['prof'],
		    "skill"=>$row['skill'],
		    "text"=>$row['text']
			);
		array_push($jsonR["team"],$jsonRow);
	}
	echo json_encode($jsonR);
}

if (($_GET['t']=='k')||($_GET['t']=='o')) {
	
	$sql="SELECT * FROM courses WHERE id=".$_GET['a'];
	$res=$conn->query($sql);
	if ($_GET['t']=='k') {
		$jsonR=array('kid_arcticles'=>array());
	}else{$jsonR=array('old_arcticles'=>array());}
	
	while ($row=$res->fetch_assoc()) {
		$jsonRow = array(
			"id"=>$row['id'],
		    "title"=>$row['title'],
		    "img"=>$row['img'],
		    "text"=>$row['text'],
		    "group"=>$row['group'],
		    "age"=>$row['age']
			);
		if ($_GET['t']=='k') {
		array_push($jsonR['kid_arcticles'],$jsonRow);
	}else{array_push($jsonR['old_arcticles'],$jsonRow);}
		
	}
	echo json_encode($jsonR);
}
if ($_GET['t']=='arr') {
		$jsonR=array('arr'=>array());
	$sql="SELECT id,title,type from courses group by title having count(1)=1 ORDER BY id";
	$res=$conn->query($sql);
	
	while ($row=$res->fetch_assoc()) {
		$jsonRow = array(
			"id"=>$row['id'],
		    "title"=>$row['title']
			);
		array_push($jsonR['arr'],$jsonRow);
		
	}
	$sql="SELECT id,title,type from courses where title in (
		    select title from courses
		    group by title having count(*) > 1
		)";
	$res=$conn->query($sql);
	
	while ($row=$res->fetch_assoc()) {
		if ($row['type']=='o') {
			$type=' (ВЗРОСЛЫЙ)';
		}else{$type=' (ДЕТСКИЙ)';}
		$jsonRow = array(
			"id"=>$row['id'],
		    "title"=>$row['title'].$type
			);
		array_push($jsonR['arr'],$jsonRow);
		
	}

   $id=array();
	foreach ($jsonR['arr'] as $key => $row) {
		$id[$key]=$row['id'];
	}
	array_multisort($id,SORT_ASC,$jsonR['arr']);
	echo json_encode($jsonR);
}
if ($_POST['t']=='c') {
	$html='';
	$sql="SELECT z.fio,z.mail,z.tel,c.title,z.date FROM zajavki z LEFT JOIN courses c ON c.id=z.course WHERE c.id=".$_POST['c'];
                    $res=$conn->query($sql);
                    while ($row=$res->fetch_assoc()) {
                      $html.= "
                        <tr>
                          <td></td>
                          <td>".$row['fio']."</td>
                          <td>".$row['mail']."</td>
                          <td>".$row['tel']."</td>
                          <td>".$row['title']."</td>
                          <td>".$row['date']."</td>
                        </tr>
                      ";
                    }
	echo $html;
}

?>