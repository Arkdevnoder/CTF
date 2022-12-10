<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Capture the flag</title>
	<link rel="stylesheet" type="text/css" href="assets/css/defaults.css">
</head>
<body>
	<canvas></canvas>
	<?php $vesrionCache = 5; ?>
	<script src="lib/three.min.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="lib/orbit.controls.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="lib/name.factory.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/app.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/object.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/controls.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/primitive/rppd.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/controller/initWorld.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/service/drawScene.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/service/resizeCanvas.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/service/network.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/ctf.js?version=<?php echo $vesrionCache; ?>"></script>
</body>
</html>