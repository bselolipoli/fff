
		var g1_arr = new Array();
		var g2_arr = new Array();
		let t1 = localStorage.getItem("t1");
		let t2 = localStorage.getItem("t2");
		let g1 = localStorage.getItem("g1");
		let g2 = localStorage.getItem("g2");
		document.getElementById('g1').innerHTML = g1;
		document.getElementById('g2').innerHTML = g2;

		let team = t1.split(', ');
		let team2 = t2.split(', ');

		team.forEach(function(item, index) {
			console.log(item.replace(/ |,|\.|/g,''));
		});

		team2.forEach(function(item, index) {
			console.log(item.replace(/ |,|\.|/g,''));
		});

		/*document.getElementById('t1').innerHTML = t1;
		document.getElementById('t2').innerHTML = t2; */
		let print_all_sum_rec = function(target, current_sum, start, result, output) {
		    if (current_sum === target) {
		        output.push(result.slice());
		    }

		    for (let i = start; i <= target; i++) {
		        let temp_sum = current_sum + i;
		        if (temp_sum <= target) {
		            result.push(i);
		            print_all_sum_rec(target, temp_sum, i, result, output);
		            result.pop();
		        } else {
		            return;
		        }
		    }
		};

		let print_all_sum = function(target) {
		    let output = [];
		    let result = [];
		    print_all_sum_rec(target, 0, 1, result, output);
		    return output;
		};
		var r = parseInt(g1);
		var r2 = parseInt(g2);
		var queue = print_all_sum(r);
		// function con(arr, goal){
		// 	var val = 0;
		// 	let str = "";
		// 	let fr = "(";
		// 	let bh = ")";
		// 	let s = ",";
		// 	var values = new Array();
		// 	init = 0;
		// 	for (let i = 0; i < arr.length; i++) {
		// 	    let arr2 = new Array();
		// 	    let upd = i;
		// 	    val+=arr[i];
		// 	    if(val == goal){
		// 	    	str.concat(fr);
		// 	    	for(let j = init; j <= upd; j++){
		// 	    		if(j == upd){
		// 	    			str.concat(bh)
		// 	    			break;
		// 	    		}
		// 	    		str.concat(arr[j].toString()+s);
		// 	    	}
		// 	    init = upd;
		// 	    }
		// 	    values.push(str);
		// 	    str = "";
		// 	    console.log(values);
		// 	}
		// 	return values;
		// }

		function update(arr, goal) {
			let str = "";
			arr.forEach(function(item, index) {
				let section = "";
				for (let i = 0; i < item.length; i++) {
					if (item.length == 1) {
						section += "(" + item[i] + ")";
					} else if (i == 0) {
						section += "(" + item[i] + " ";
					} else if (i == item.length - 1) {
						section += item[i] + "), ";
					} else {
						section +=  item[i] + " ";
					}
				}
				str += section;
			});
			return str;
		}
		document.getElementById('Result1').innerHTML = update(print_all_sum(r),r);
		document.getElementById('Result2').innerHTML = update(print_all_sum(r2),r2);