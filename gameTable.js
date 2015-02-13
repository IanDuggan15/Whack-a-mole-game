function drawtable() {
var num_rows=10 ;
	var num_cols=10 ;
	document.write('<table border="100px" align="right">');
	for ( i=0 ; i<num_rows; i++ ) {
		document.write('<tr>');
		for(x=0; x<num_cols; x++) {
			document.write('<td>test</td>');
			}
			document.write('</tr>');
		}
		document.write('</table>');
}
