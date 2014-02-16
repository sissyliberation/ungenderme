$(document).ready(function(){
	$('#convertBtn').on('click', function(e){
		e.preventDefault();

		var tmp = $('#pronouns').val();
		if(tmp=="") {
			alert('Please select an option from the dropdown menu');
		}
		else {
			console.log(tmp);
			var he = {
				nomative: "he",
				oblique: "him", 
				possessive_determiner: "his",
				possessive_pronoun: "his",
				reflexive: "himself"
			}

			var she = {
				nomative: "she",
				oblique: "her", 
				possessive_determiner: "hers",
				possessive_pronoun: "hers",
				reflexive: "herself"
			}
			
			if(tmp=="they_them") {
				// they / them
				var they = {
					nomative: "they",
					oblique: "them", 
					possessive_determiner: "their",
					possessive_pronoun: "theirs",
					reflexive: "themself"
				}

			}
			else if(tmp=="ze_zir") {
				// ze / zir
				var ze_zir = {
					nomative: "ze",
					oblique: "zir", 
					possessive_determiner: "zir",
					possessive_pronoun: "zirs",
					reflexive: "zirself"
				}

				var aoeu = $("#originaltext").val();

				var regex_he_nomative = new RegExp(he.nomative, "g");
				var regex_he_oblique = new RegExp(he.oblique, "g");
				var regex_he_possessive_determiner = new RegExp(he.possessive_determiner, "g");
				var regex_he_possessive_pronoun = new RegExp(he.possessive_pronoun, "g");
				var regex_he_reflexive = new RegExp(he.reflexive, "g");
				$("#convertedtext").val(   aoeu.replace(regex_he_nomative,                ze_zir.nomative              ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_oblique,                 ze_zir.oblique               ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_possessive_determiner,   ze_zir.possessive_determiner ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_possessive_pronoun,      ze_zir.possessive_pronoun    ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_reflexive,               ze_zir.reflexive             ) );

				var regex_she_nomative = new RegExp(she.nomative, "g");
				var regex_she_oblique = new RegExp(she.oblique, "g");
				var regex_she_possessive_determiner = new RegExp(she.possessive_determiner, "g");
				var regex_she_possessive_pronoun = new RegExp(she.possessive_pronoun, "g");
				var regex_she_reflexive = new RegExp(she.reflexive, "g");

				$("#convertedtext").val(   aoeu.replace(regex_she_nomative,                ze_zir.nomative              ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_oblique,                 ze_zir.oblique               ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_possessive_determiner,   ze_zir.possessive_determiner ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_possessive_pronoun,      ze_zir.possessive_pronoun    ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_reflexive,               ze_zir.reflexive             ) );
		
			}
			else if(tmp=="ze_hir") {
				// ze / hir
				var ze_hir = {
					nomative: "ze",
					oblique: "hir", 
					possessive_determiner: "hir",
					possessive_pronoun: "hirs",
					reflexive: "hirself"
				}

				var aoeu = $("#originaltext").val();

				var regex_he_nomative = new RegExp(he.nomative, "g");
				var regex_he_oblique = new RegExp(he.oblique, "g");
				var regex_he_possessive_determiner = new RegExp(he.possessive_determiner, "g");
				var regex_he_possessive_pronoun = new RegExp(he.possessive_pronoun, "g");
				var regex_he_reflexive = new RegExp(he.reflexive, "g");
				$("#convertedtext").val(   aoeu.replace(regex_he_nomative,                ze_hir.nomative              ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_oblique,                 ze_hir.oblique               ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_possessive_determiner,   ze_hir.possessive_determiner ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_possessive_pronoun,      ze_hir.possessive_pronoun    ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_reflexive,               ze_hir.reflexive             ) );

				var regex_she_nomative = new RegExp(she.nomative, "g");
				var regex_she_oblique = new RegExp(she.oblique, "g");
				var regex_she_possessive_determiner = new RegExp(she.possessive_determiner, "g");
				var regex_she_possessive_pronoun = new RegExp(she.possessive_pronoun, "g");
				var regex_she_reflexive = new RegExp(she.reflexive, "g");

				$("#convertedtext").val(   aoeu.replace(regex_she_nomative,                ze_hir.nomative              ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_oblique,                 ze_hir.oblique               ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_possessive_determiner,   ze_hir.possessive_determiner ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_possessive_pronoun,      ze_hir.possessive_pronoun    ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_reflexive,               ze_hir.reflexive             ) );

			}
			else if(tmp=="xe_xir") {
				// xe
				var xe = {
					nomative: "xe",
					oblique: "xem", 
					possessive_determiner: "xyr",
					possessive_pronoun: "xyrs",
					reflexive: "xemself"
				}

				var aoeu = $("#originaltext").val();

				var regex_he_nomative = new RegExp(he.nomative, "g");
				var regex_he_oblique = new RegExp(he.oblique, "g");
				var regex_he_possessive_determiner = new RegExp(he.possessive_determiner, "g");
				var regex_he_possessive_pronoun = new RegExp(he.possessive_pronoun, "g");
				var regex_he_reflexive = new RegExp(he.reflexive, "g");
				$("#convertedtext").val(   aoeu.replace(regex_he_nomative,                xe.nomative              ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_oblique,                 xe.oblique               ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_possessive_determiner,   xe.possessive_determiner ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_possessive_pronoun,      xe.possessive_pronoun    ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_he_reflexive,               xe.reflexive             ) );

				var regex_she_nomative = new RegExp(she.nomative, "g");
				var regex_she_oblique = new RegExp(she.oblique, "g");
				var regex_she_possessive_determiner = new RegExp(she.possessive_determiner, "g");
				var regex_she_possessive_pronoun = new RegExp(she.possessive_pronoun, "g");
				var regex_she_reflexive = new RegExp(she.reflexive, "g");

				$("#convertedtext").val(   aoeu.replace(regex_she_nomative,                xe.nomative              ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_oblique,                 xe.oblique               ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_possessive_determiner,   xe.possessive_determiner ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_possessive_pronoun,      xe.possessive_pronoun    ) );
				aoeu = $("#convertedtext").val();
				$("#convertedtext").val(   aoeu.replace(regex_she_reflexive,               xe.reflexive             ) );
			}
		}
	});
});