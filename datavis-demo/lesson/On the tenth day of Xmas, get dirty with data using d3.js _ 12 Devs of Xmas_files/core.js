$(document).ready( function () {

	$("code ol").each( function () {
		$this = $(this);
		
		if( $this.height() < 50 )
		{
			$this.css({"background-image":"none"});
		}
	});

});