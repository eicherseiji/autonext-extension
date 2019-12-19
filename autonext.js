function nextEpisode() {
    var prevnext = document.getElementsByClassName("prev-next")[1]
    var next = prevnext.childNodes[0]
    window.location = next.href
}

async function playVideo(video) {
	try {
		await video.play()
	} catch(err) {
		console.log(err)
	}
}

function init() {
	console.log("hiii!!")
	var iframe = document.getElementsByTagName('iframe')[0].contentWindow.document
	var video = iframe.getElementById('video-js_html5_api')
	video.onplay = function() { video.onended = nextEpisode }
	setTimeout(function() { playVideo(video) }, 1000)
	video.scrollIntoView()
	console.log("loaded")
}

const filter = {
	properties: ["status"]
}

window.onload = init
