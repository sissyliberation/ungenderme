$(document).ready(function(){

	$('#convertBtn').on('click', function(e){
		
e.preventDefault();

		var chosen_option = $('#pronouns').val();
		if(chosen_option=="") {
			alert('Please select an option from the dropdown menu');
		}
		else {
			console.log(chosen_option);

			// used to check if a pronoun is matched
			var isMatch = false;
			var end_char = "";
			var word_minus_end_char = "";
			var isTheyChosen = false;

			var he = ["he", "him", "his", "his", "himself"];
			var she = ["she", "her", "hers", "hers", "herself"];
			//gender neutral pronouns
			var they =  ["they", "them", "their", "theirs", "themself"];
			var ze_zir= ["ze", "zir", "zir", "zirs", "zirself"];
			var ze_hir= ["ze", "hir", "hir", "hirs", "hirself"];
			var xe =    ["xe", "xem", "xyr", "xyrs", "xemself"];
			//make this equal the chosen pronounss
			var chosen_pronouns = [];

			if(chosen_option=="they_them") {
				chosen_pronouns = they;
				isTheyChosen = true;
			}
			else if(chosen_option=="ze_zir") {
				chosen_pronouns = ze_zir;
			}
			else if(chosen_option=="ze_hir") {
				chosen_pronouns = ze_hir;
			}
			else if(chosen_option=="xe_xir") {
				chosen_pronouns = xe;
			}



			// split the text into words
			var words = $("#originaltext").val().split(" ");

			for(var i = 0; i < words.length; ++i) {
				for(var j = 0; j< chosen_pronouns.length; ++j) {
					// check for direct matching
					if(words[i] == he[j] || words[i] == she[j]) {
						words[i] = chosen_pronouns[j];
						isMatch = true;
					}
					// check to see if a word is capitalized and compare to "he"
					else if(words[i].substring(0,1).toLowerCase() == he[j].substring(0,1) &&
							words[i].toLowerCase() == he[j]) {
						words[i] = chosen_pronouns[j].substring(0, 1).toUpperCase() + chosen_pronouns[j].substring(1);
						isMatch = true;
					}
					// check to see if a word is capitalized and compare to "she"
					else if(words[i].substring(0,1).toLowerCase() == she[j].substring(0,1) &&
							words[i].toLowerCase() == she[j]) {
						words[i] = chosen_pronouns[j].substring(0, 1).toUpperCase() + chosen_pronouns[j].substring(1);
						isMatch = true;
					}
					// check to see if a word is followed by a special sentence character
					else if (words[i].substring(words.length - 1) == "." ||
							words[i].substring(words.length - 1)  == "," ||
							words[i].substring(words.length - 1)  == "?" ||
							words[i].substring(words.length - 1)  == "!" ) {

						end_char = words[i].substring(words.length - 1);
						word_minus_end_char = words[i].substring(0,words.length - 1);

						if(words[i] == he[j] || words[i] == she[j]) {
							words[i] = chosen_pronouns[j] + end_char;
							isMatch = true;
						}
						else if(words[i].substring(0,1).toLowerCase() == he[j].substring(0,1) &&
								words[i].toLowerCase() == he[j]) {
							words[i] = chosen_pronouns[j].substring(0, 1).toUpperCase() + chosen_pronouns[j].substring(1) + end_char;
							isMatch = true;
						}
						else if(words[i].substring(0,1).toLowerCase() == she[j].substring(0,1) &&
								words[i].toLowerCase() == she[j]) {
							words[i] = chosen_pronouns[j].substring(0, 1).toUpperCase() + chosen_pronouns[j].substring(1) + end_char;
							isMatch = true;
						}
					}

					// if a word has been matched
					if(isMatch) {
						isMatch = false;
						// if anything but "they" is chosen gender-neutral pronoun
						if( isTheyChosen) {
							if(i< words.length-1) {
								console.log("next word: "+words[i+1]);
							}
							if(i< words.length-1 && words[i+1]=="is") {
								console.log("\treplaced is");
								words[i+1] = "are";
								break;
							}
							else if (i< words.length-1 && words[i+1] == "was") {
								console.log("\treplaced was");
								words[i+1] = "were";
								break;
							}
							else if (i< words.length-1 && words[i+1] == "has") {
								console.log("\treplaced has");
								words[i+1] = "have";
								break;
							}
							else if(i< words.length-1 && words[i+1].substring(words[i+1].length - 1) =="s" ) {
								console.log("-");
								words[i+1] = words[i+1].substring(0,words[i+1].length-1);
							}
							else if (i< words.length-1 &&
								words[i+1].substring(words[i+1].length - 1) == "." ||
								words[i+1].substring(words[i+1].length - 1)  == "," ||
								words[i+1].substring(words[i+1].length - 1)  == "?" ||
								words[i+1].substring(words[i+1].length - 1)  == "!" ) {
								console.log("has punc");

								end_char = words[i+1].substring(words[i+1].length - 1);
								word_minus_end_char = words[i+1].substring(0,words[i+1].length - 1);

								console.log("end_char: "+end_char);
								console.log("word_minus_end_char: "+word_minus_end_char);

								if (word_minus_end_char == "is") {
									words[i+1] = "are" + end_char;									
								}
								else if (word_minus_end_char == "was") {
									words[i+1] = "were" + end_char;
									break;
								}
								else if (word_minus_end_char == "has") {
									words[i+1] = "have" + end_char;
									break;
								}
								else if(i< words.length-1 && word_minus_end_char.substring(word_minus_end_char.length - 1) =="s" ) {
									console.log("aoeu");
									words[i+1] = word_minus_end_char.substring(0,word_minus_end_char.length-1);
								}
								else {
									console.log("next word doesn't need to be changed");
								}
							}
						}
						// if anything but "they" is chosen gender-neutral pronoun
						else {
							break;
						}

					}
				} // inner loop
			} // outer loop close

			$('#convertedtext').val(words.join(" "));
		}
	});
});