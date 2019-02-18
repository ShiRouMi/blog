/*
<div class="btn-fullscreen" @click="handleFullScreen">
	<el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
		<i class="el-icon-rank"></i>
	</el-tooltip>
</div>
*/
handleFullScreen() {
	let element = document.documentElement;
	if (this.fullscreen) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	} else {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
			// IE11
			element.msRequestFullscreen();
		}
	}
	this.fullscreen = !this.fullscreen;
}