<!--<?php $vesrionCache = 14; ?>-->
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<title>Capture the flag</title>
	<link rel="stylesheet" type="text/css" href="assets/css/defaults.css?version=<?php echo $vesrionCache; ?>">
</head>
<body>
	<div class="instructions">
		<div class="instructions__text">Click to start</div>
	</div>
	<div class="controls-left">
		<div class="controls-left-in-wrap">
			<div class="controls-left-arrow-left">
			</div>
			<div class="controls-left-arrow-up">
			</div>
			<div class="controls-left-arrow-right">
			</div>
			<div class="controls-left-arrow-bottom">
			</div>
		</div>
	</div>
	<div class="controls-right">
		<div class="controls-right-in-wrap">
			<div class="strike">
			</div>
			<div class="arrow">
			</div>
		</div>
	</div>
	<div class="center">
		<div class="c">
			<div class="c-v"></div>
			<div class="c-h"></div>
		</div>
	</div>

	<div class="controls">
		<div class="controls-points">
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
			<div class="controls-point">
				<div class="point"></div>
			</div>
		</div>
		<div class="controls-blocks">
			64
		</div>
	</div>
	<canvas></canvas>
	<script src="lib/three.min.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="lib/pointer.lock.controls.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="lib/name.factory.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/app.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/cameraView.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/object.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/network/http.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/controls.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/bumpDetector.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/lights/directional.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/lights/ambient.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/lights/point.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/chunk/loader.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/model/primitive/rppd.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/controller/initWorld.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/service/drawScene.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/service/resizeCanvas.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/service/keyboardListener.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/service/network.js?version=<?php echo $vesrionCache; ?>"></script>
	<script src="src/ctf.js?version=<?php echo $vesrionCache; ?>"></script>
</body>
</html>