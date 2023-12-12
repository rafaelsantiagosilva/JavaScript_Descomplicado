$(document).ready(() => {
	$("#subtitle_1").click(() => {
		if ($("#content_1").css("display") == "none") {
			if ($("#content_1").html() == "") {
				$.ajax({
					url: "./docs/content_1.txt",
					success: (resultado) => {
						$("#content_1").html(resultado);
						$("#content_1").css("display", "block");
					},
				});
			} else {
				$("#content_1").css("display", "block");
			}
		} else {
               $("#content_1").css('display', 'none');
          }
	});

	$("#subtitle_2").click(() => {
		if ($("#content_2").css("display") == "none") {
			if ($("#content_2").html() == "") {
				$.ajax({
					url: "./docs/content_2.txt",
					success: (resultado) => {
						$("#content_2").html(resultado);
						$("#content_2").css("display", "block");
					},
				});
			} else {
				$("#content_2").css("display", "block");
			}
		} else {
               $("#content_2").css('display', 'none');
          }
	});
});
