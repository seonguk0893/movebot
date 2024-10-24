document.addEventListener("DOMContentLoaded", function () {
  var doc = document.documentElement;
  var FullPage = document.getElementById("today");

  // 전체화면 설정
  function openFullScreenMode() {
    if (doc.requestFullscreen) doc.requestFullscreen();
    else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();
    else if (doc.mozRequestFullScreen) doc.mozRequestFullScreen();
    else if (doc.msRequestFullscreen) doc.msRequestFullscreen();
    $(".fullscreen").hide();
    $(".close-fullscreen").show();
  }

  function closeFullScreenMode() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    $(".fullscreen").show();
    $(".close-fullscreen").hide();
  }

  FullPage.addEventListener("click", function () {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      openFullScreenMode();
    } else {
      closeFullScreenMode();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var micButton = document.querySelector(".mic-button");
  var micIcon = micButton.querySelector("i");
  var micButtonLoader = micButton.querySelector(".mic-button-loader");
  var waveContainer = document.querySelector(".waveContainer");

  function hideWaveContainer() {
    waveContainer.style.display = "none";
  }

  function showWaveContainer() {
    waveContainer.style.display = "flex";
  }

  hideWaveContainer();

  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "ko-KR";
  let recognitionActive = false;
  let isVoicePlayed = false;

  micButton.addEventListener("click", function () {
    micIcon.classList.toggle("m-active");
    micButtonLoader.classList.toggle("active");

    if (micIcon.classList.contains("m-active")) {
      showWaveContainer();
    } else {
      hideWaveContainer();
    }

    if (!recognitionActive) {
      recognition.start();
      recognitionActive = true;
    } else {
      recognition.stop();
      recognitionActive = false;
    }
  });

  recognition.onresult = function (event) {
    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript;
    console.log("인식된 단어:", transcript);

    if (transcript.includes("사과")) {
      window.location.href = "/apple";
    } else if (transcript.includes("배")) {
      window.location.href = "/pear";
    } else if (transcript.includes("포도")) {
      window.location.href = "/grape";
    } else if (transcript.includes("감")) {
      window.location.href = "/persimmon";
    }

    hideWaveContainer();
    recognition.stop();
    micIcon.classList.remove("m-active");
    micButtonLoader.classList.remove("active");
    recognitionActive = false;
  };

  recognition.onerror = function (event) {
    console.error("음성 인식 오류:", event.error);
  };

  function playAudio(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
  }

  function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  function _0x4d78() {
    const _0x5200d7 = [
      "1446852ugkSWc",
      "128835gkFPAV",
      "AIzaSyDdhp_dq84sgH9ZdZzbDDYBwpakPrx_jUc",
      "11EzxkRg",
      "4119216lsuoBU",
      "323880lqWUVr",
      "63652aujnvg",
      "105ojHIQQ",
      "20gKFXEX",
      "91NAYfmP",
      "12RWTgQu",
      "1997090jCILTD",
      "388336WrfrbO",
    ];
    _0x4d78 = function () {
      return _0x5200d7;
    };
    return _0x4d78();
  }
  const _0x1b188c = _0x497d;
  function _0x497d(_0x1bfc8f, _0x334a50) {
    const _0x4d783b = _0x4d78();
    return (
      (_0x497d = function (_0x497dc6, _0x14c96c) {
        _0x497dc6 = _0x497dc6 - 0x13d;
        let _0x8ad6bc = _0x4d783b[_0x497dc6];
        return _0x8ad6bc;
      }),
      _0x497d(_0x1bfc8f, _0x334a50)
    );
  }
  (function (_0x3dd67e, _0x4a5485) {
    const _0x36e16a = _0x497d,
      _0x4c7c5b = _0x3dd67e();
    while (!![]) {
      try {
        const _0x1cddf3 =
          parseInt(_0x36e16a(0x140)) / 0x1 +
          parseInt(_0x36e16a(0x141)) / 0x2 +
          (parseInt(_0x36e16a(0x148)) / 0x3) *
            (-parseInt(_0x36e16a(0x147)) / 0x4) +
          (-parseInt(_0x36e16a(0x13f)) / 0x5) *
            (-parseInt(_0x36e16a(0x13e)) / 0x6) +
          (parseInt(_0x36e16a(0x13d)) / 0x7) *
            (-parseInt(_0x36e16a(0x146)) / 0x8) +
          (parseInt(_0x36e16a(0x142)) / 0x9) *
            (-parseInt(_0x36e16a(0x149)) / 0xa) +
          (-parseInt(_0x36e16a(0x144)) / 0xb) *
            (parseInt(_0x36e16a(0x145)) / 0xc);
        if (_0x1cddf3 === _0x4a5485) break;
        else _0x4c7c5b["push"](_0x4c7c5b["shift"]());
      } catch (_0x30e0fa) {
        _0x4c7c5b["push"](_0x4c7c5b["shift"]());
      }
    }
  })(_0x4d78, 0x6f310);
  const apiKey = _0x1b188c(0x143);

  function transcribeAudio(audioContent) {
    const audioData = utf8_to_b64(audioContent);

    const url =
      "https://speech.googleapis.com/v1/speech:recognize?key=" + apiKey;
    const requestData = {
      config: {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        languageCode: "ko-KR",
      },
      audio: {
        content: audioData,
      },
    };

    $.ajax({
      type: "POST",
      url: url,
      data: JSON.stringify(requestData),
      contentType: "application/json",
      success: function (response) {
        console.log("음성 인식 결과:", response);
      },
      error: function (xhr, status, error) {
        console.error("오류 발생:", error);
      },
    });
  }
});

function hideWaveContainer() {
  var waveContainer = document.querySelector(".waveContainer");
  waveContainer.style.display = "none";
}
