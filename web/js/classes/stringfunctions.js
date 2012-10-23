/*
---
description: String CRC32 hashing.
license: MIT-style
authors: [Christopher Pitt]
provides: [String.toCRC32]
requires: 
  core/1.2.4: [String]
  _self_/_current_: [String.toUTF8]
...
*/

(function() {

	var table = new Array(
		'00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3',
		'0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91',
		'1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7',
		'136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5',
		'3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B',
		'35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59',
		'26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F',
		'2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D',
		'76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433',
		'7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01',
		'6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457',
		'65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65',
		'4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB',
		'4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9',
		'5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F',
		'5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD',
		'EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683',
		'E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1',
		'F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7',
		'FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5',
		'D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B',
		'D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79',
		'CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F',
		'C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D',
		'9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713',
		'95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21',
		'86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777',
		'88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45',
		'A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB',
		'AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9',
		'BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF',
		'B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D'
	).join(' ');

	function crc32(string)
	{
		var a, b, c, d, e = 0 ^ (-1),
		string = string.toUTF8();

		for(a = 0; b = string.charCodeAt(a); a++)
		{
			c = (e ^ b) & 0xFF;
			d = "0x" + table.substr(c * 9, 8);
			e = (e >>> 8) ^ d;
		}

		return e ^ (-1);
	}

	String.implement({
		'toCRC32': function()
		{
			return crc32(this);
		} 
	});

})();

/*
---
description: String Hex encode/decode.
license: MIT-style
authors: [Christopher Pitt]
provides: [String.toSHA256]
requires: 
  core/1.2.4: [String]
  _self_/_current_: [String.toUTF8]
...
*/

(function() {

	String.implement({
		'toHex': function()
		{
			var r = '', i = 0,
			limit = this.length;

			while(i < limit){
				r += this.charCodeAt(i++).toString(16);
			}

			return r;
		},
		'fromHex': function()
		{
			var r = s = '',
			e = this.length;

			while(e >= 0)
			{
				s = e - 2;
				r = String.fromCharCode('0x' + this.substring(s, e)) + r;
				e = s;
			}

			return r;
		}
	});

})();

/*
---
description: String MD5 hashing.
license: MIT-style
authors: [Christopher Pitt]
provides: [String.toMD5]
requires: 
  core/1.2.4: [String]
  _self_/_current_: [String.toUTF8]
...
*/

(function() {

	var transforms = {
		'f': function(a, b, c)
		{
			return (a & b) | ((~a) & c);
		},
		'g': function(a, b, c)
		{
			return (a & c) | (b & (~c));
		},
		'h': function(a, b, c)
		{
			return (a ^ b ^ c);
		},
		'i': function(a, b, c)
		{
			return (b ^ (a | (~c)));
		},
		'rotateLeft': function(a, b)
		{
			return (a << b) | (a >>> (32 - b));
		},
		'addUnsigned': function(a, b)
		{
			var a8 = (a & 0x80000000),
				b8 = (b & 0x80000000),
				a4 = (a & 0x40000000),
				b4 = (b & 0x40000000),
				result = (a & 0x3FFFFFFF) + (b & 0x3FFFFFFF);

			if (a4 & b4)
			{
				return (result ^ 0x80000000 ^ a8 ^ b8);
			}

			if (a4 | b4)
			{
				if (result & 0x40000000)
				{
					return (result ^ 0xC0000000 ^ a8 ^ b8);
				}
				else
				{
					return (result ^ 0x40000000 ^ a8 ^ b8);
				}
			}
			else
			{
				return (result ^ a8 ^ b8);
			}
		},
		'compound': function(a, b, c, d, e, f, g, h)
		{
			var trans = transforms,
				add = trans.addUnsigned,
				temp = add(b, add(add(trans[a](c, d, e), g), f));

			return add(trans.rotateLeft(temp, h), c);
		}
	};

	function convertToArray(string)
	{
		var messageLength = string.length,
			numberOfWords = (((messageLength + 8) - ((messageLength + 8) % 64)) / 64 + 1) * 16,
			wordArray = new Array(),
			wordCount = bytePosition = byteCount = 0;

		while (byteCount < messageLength)
		{
			wordCount = (byteCount - (byteCount % 4)) / 4;
			bytePosition = (byteCount % 4) * 8;
			wordArray[wordCount] = (wordArray[wordCount] | (string.charCodeAt(byteCount) << bytePosition));
			byteCount++;
		}

		wordCount = (byteCount - (byteCount % 4)) / 4;
		bytePosition = (byteCount % 4) * 8;
		wordArray[wordCount] = wordArray[wordCount] | (0x80 << bytePosition);
		wordArray[numberOfWords - 2] = messageLength << 3;
		wordArray[numberOfWords - 1] = messageLength >>> 29;

		return wordArray;
	}

	function convertToHex(string)
	{
		var result = temp = nibble = i = '';

		for (i = 0; i <= 3; i++)
		{
			nibble = (string >>> (i * 8)) & 255;
			temp = "0" + nibble.toString(16);
			result = result + temp.substr(temp.length-2,2);
		}

		return result;
	}

	function md5(string)
	{
		var t1, t2, t3, t4,
			x = convertToArray(string.toUTF8()),
			
			a = 0x67452301, b = 0xEFCDAB89,
			c = 0x98BADCFE, d = 0x10325476,
			
			s1 = 7, s2 = 12, s3 = 17, s4 = 22,
			s5 = 5, s6 = 9, s7 = 14, s8 = 20,
			s9 = 4, s10 = 11, s11 = 16, s12 = 23,
			s13 = 6, s14 = 10, s15 = 15, s16 = 21;

		for (var k = 0; k < x.length; k += 16)
		{
			t1 = a; t2 = b; t3 = c; t4 = d;

			a = transforms.compound('f', a, b, c, d, 0xD76AA478, x[k + 0], s1);
			d = transforms.compound('f', d, a, b, c, 0xE8C7B756, x[k + 1], s2);
			c = transforms.compound('f', c, d, a, b, 0x242070DB, x[k + 2], s3);
			b = transforms.compound('f', b, c, d, a, 0xC1BDCEEE, x[k + 3], s4);
			a = transforms.compound('f', a, b, c, d, 0xF57C0FAF, x[k + 4], s1);
			d = transforms.compound('f', d, a, b, c, 0x4787C62A, x[k + 5], s2);
			c = transforms.compound('f', c, d, a, b, 0xA8304613, x[k + 6], s3);
			b = transforms.compound('f', b, c, d, a, 0xFD469501, x[k + 7], s4);
			a = transforms.compound('f', a, b, c, d, 0x698098D8, x[k + 8], s1);
			d = transforms.compound('f', d, a, b, c, 0x8B44F7AF, x[k + 9], s2);
			c = transforms.compound('f', c, d, a, b, 0xFFFF5BB1, x[k + 10], s3);
			b = transforms.compound('f', b, c, d, a, 0x895CD7BE, x[k + 11], s4);
			a = transforms.compound('f', a, b, c, d, 0x6B901122, x[k + 12], s1);
			d = transforms.compound('f', d, a, b, c, 0xFD987193, x[k + 13], s2);
			c = transforms.compound('f', c, d, a, b, 0xA679438E, x[k + 14], s3);
			b = transforms.compound('f', b, c, d, a, 0x49B40821, x[k + 15], s4);
			a = transforms.compound('g', a, b, c, d, 0xF61E2562, x[k + 1], s5);
			d = transforms.compound('g', d, a, b, c, 0xC040B340, x[k + 6], s6);
			c = transforms.compound('g', c, d, a, b, 0x265E5A51, x[k + 11], s7);
			b = transforms.compound('g', b, c, d, a, 0xE9B6C7AA, x[k + 0], s8);
			a = transforms.compound('g', a, b, c, d, 0xD62F105D, x[k + 5], s5);
			d = transforms.compound('g', d, a, b, c, 0x2441453, x[k + 10], s6);
			c = transforms.compound('g', c, d, a, b, 0xD8A1E681, x[k + 15], s7);
			b = transforms.compound('g', b, c, d, a, 0xE7D3FBC8, x[k + 4], s8);
			a = transforms.compound('g', a, b, c, d, 0x21E1CDE6, x[k + 9], s5);
			d = transforms.compound('g', d, a, b, c, 0xC33707D6, x[k + 14], s6);
			c = transforms.compound('g', c, d, a, b, 0xF4D50D87, x[k + 3], s7);
			b = transforms.compound('g', b, c, d, a, 0x455A14ED, x[k + 8], s8);
			a = transforms.compound('g', a, b, c, d, 0xA9E3E905, x[k + 13], s5);
			d = transforms.compound('g', d, a, b, c, 0xFCEFA3F8, x[k + 2], s6);
			c = transforms.compound('g', c, d, a, b, 0x676F02D9, x[k + 7], s7);
			b = transforms.compound('g', b, c, d, a, 0x8D2A4C8A, x[k + 12], s8);
			a = transforms.compound('h', a, b, c, d, 0xFFFA3942, x[k + 5], s9);
			d = transforms.compound('h', d, a, b, c, 0x8771F681, x[k + 8], s10);
			c = transforms.compound('h', c, d, a, b, 0x6D9D6122, x[k + 11], s11);
			b = transforms.compound('h', b, c, d, a, 0xFDE5380C, x[k + 14], s12);
			a = transforms.compound('h', a, b, c, d, 0xA4BEEA44, x[k + 1], s9);
			d = transforms.compound('h', d, a, b, c, 0x4BDECFA9, x[k + 4], s10);
			c = transforms.compound('h', c, d, a, b, 0xF6BB4B60, x[k + 7], s11);
			b = transforms.compound('h', b, c, d, a, 0xBEBFBC70, x[k + 10], s12);
			a = transforms.compound('h', a, b, c, d, 0x289B7EC6, x[k + 13], s9);
			d = transforms.compound('h', d, a, b, c, 0xEAA127FA, x[k + 0], s10);
			c = transforms.compound('h', c, d, a, b, 0xD4EF3085, x[k + 3], s11);
			b = transforms.compound('h', b, c, d, a, 0x4881D05, x[k + 6], s12);
			a = transforms.compound('h', a, b, c, d, 0xD9D4D039, x[k + 9], s9);
			d = transforms.compound('h', d, a, b, c, 0xE6DB99E5, x[k + 12], s10);
			c = transforms.compound('h', c, d, a, b, 0x1FA27CF8, x[k + 15], s11);
			b = transforms.compound('h', b, c, d, a, 0xC4AC5665, x[k + 2], s12);
			a = transforms.compound('i', a, b, c, d, 0xF4292244, x[k + 0], s13);
			d = transforms.compound('i', d, a, b, c, 0x432AFF97, x[k + 7], s14);
			c = transforms.compound('i', c, d, a, b, 0xAB9423A7, x[k + 14], s15);
			b = transforms.compound('i', b, c, d, a, 0xFC93A039, x[k + 5], s16);
			a = transforms.compound('i', a, b, c, d, 0x655B59C3, x[k + 12], s13);
			d = transforms.compound('i', d, a, b, c, 0x8F0CCC92, x[k + 3], s14);
			c = transforms.compound('i', c, d, a, b, 0xFFEFF47D, x[k + 10], s15);
			b = transforms.compound('i', b, c, d, a, 0x85845DD1, x[k + 1], s16);
			a = transforms.compound('i', a, b, c, d, 0x6FA87E4F, x[k + 8], s13);
			d = transforms.compound('i', d, a, b, c, 0xFE2CE6E0, x[k + 15], s14);
			c = transforms.compound('i', c, d, a, b, 0xA3014314, x[k + 6], s15);
			b = transforms.compound('i', b, c, d, a, 0x4E0811A1, x[k + 13], s16);
			a = transforms.compound('i', a, b, c, d, 0xF7537E82, x[k + 4], s13);
			d = transforms.compound('i', d, a, b, c, 0xBD3AF235, x[k + 11], s14);
			c = transforms.compound('i', c, d, a, b, 0x2AD7D2BB, x[k + 2], s15);
			b = transforms.compound('i', b, c, d, a, 0xEB86D391, x[k + 9], s16);

			a = transforms.addUnsigned(a, t1);
			b = transforms.addUnsigned(b, t2);
			c = transforms.addUnsigned(c, t3);
			d = transforms.addUnsigned(d, t4);
		}

		return (convertToHex(a) + convertToHex(b) + convertToHex(c) + convertToHex(d)).toLowerCase();
	}

	String.implement({
		'toMD5': function()
		{
			return md5(this);
		}
	});
	
})();

/*
---
description: String SHA1 hashing.
license: MIT-style
authors: [Christopher Pitt]
provides: [String.toSHA1]
requires: 
  core/1.2.4: [String]
  _self_/_current_: [String.toUTF8]
...
*/

(function() {

	var transforms = {
		'rotateLeft': function(a, b)
		{
			return (a << b) | (a >>> (32 - b));
		},
		'hex': function(a)
		{
			var b, c, result = '';

			for(b = 7; b >= 0; b--)
			{
				c = (a >>> (b * 4)) & 0x0f;
				result += c.toString(16);
			}

			return result;
		}
	};

	function sha1(string)
	{
		var a, b, c,
			h1 = 0x67452301,
			h2 = 0xEFCDAB89,
			h3 = 0x98BADCFE,
			h4 = 0x10325476,
			h5 = 0xC3D2E1F0,
			t1, t2, t3, t4, t5,

			string = string.toUTF8(),
			length = string.length,
			words = new Array(),
			buffer = new Array(80),

			code = function(a) {
				return string.charCodeAt(a);
			},

			assign = function(c) {
				t5 = t4;
				t4 = t3;
				t3 = transforms.rotateLeft(t2, 30);
				t2 = t1;
				t1 = c
			};

		for(a = 0; a < length - 3; a += 4)
		{
			b = code(a) << 24 | code(a + 1) << 16 | code(a + 2) << 8 | code(a + 3);
			words.push(b);
		}

		switch (length % 4)
		{
			case 0:
				a = 0x080000000;
				break;
			case 1:
				a = code(length - 1) << 24 | 0x0800000;
				break;
			case 2:
				a = code(length - 2) << 24 | code(length - 1) << 16 | 0x08000;
				break;
			case 3:
				a = code(length - 3) << 24 | code(length - 2) << 16 | code(length - 1) << 8 | 0x80;
				break;
		}

		words.push(a);

		while ((words.length % 16) != 14)
		{
			words.push(0);
		}

		words.push(length >>> 29);
		words.push((length << 3) & 0x0ffffffff);

		for (c = 0; c < words.length; c += 16)
		{
			for(a = 0; a < 16; a++)
			{
				buffer[a] = words[c + a];
			}

			for(a = 16; a <= 79; a++)
			{
				buffer[a] = transforms.rotateLeft(buffer[a - 3] ^ buffer[a - 8] ^ buffer[a - 14] ^ buffer[a - 16], 1);
			}

			t1 = h1;
			t2 = h2;
			t3 = h3;
			t4 = h4;
			t5 = h5;

			for(a = 0; a <= 19; a++)
			{
				assign((transforms.rotateLeft(t1, 5) + ((t2 & t3) | (~t2 & t4)) + t5 + buffer[a] + 0x5A827999) & 0x0ffffffff);
			}

			for(a = 20; a <= 39; a++)
			{
				assign((transforms.rotateLeft(t1, 5) + (t2 ^ t3 ^ t4) + t5 + buffer[a] + 0x6ED9EBA1) & 0x0ffffffff);
			}

			for(a = 40; a <= 59; a++)
			{
				assign((transforms.rotateLeft(t1, 5) + ((t2 & t3) | (t2 & t4) | (t3 & t4)) + t5 + buffer[a] + 0x8F1BBCDC) & 0x0ffffffff);
			}

			for(a = 60; a <= 79; a++)
			{
				assign((transforms.rotateLeft(t1, 5) + (t2 ^ t3 ^ t4) + t5 + buffer[a] + 0xCA62C1D6) & 0x0ffffffff);
			}

			h1 = (h1 + t1) & 0x0ffffffff;
			h2 = (h2 + t2) & 0x0ffffffff;
			h3 = (h3 + t3) & 0x0ffffffff;
			h4 = (h4 + t4) & 0x0ffffffff;
			h5 = (h5 + t5) & 0x0ffffffff;
		}

		return (transforms.hex(h1) + transforms.hex(h2) + transforms.hex(h3) + transforms.hex(h4) + transforms.hex(h5)).toLowerCase();
	}

	String.implement({
		'toSHA1': function()
		{
			return sha1(this);
		}
	});

})();

/*
---
description: String SHA256 hashing.
license: MIT-style
authors: [Christopher Pitt]
provides: [String.toSHA256]
requires: 
  core/1.2.4: [String]
  _self_/_current_: [String.toUTF8]
...
*/

(function() {

	var table = [
			0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
			0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
			0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
			0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
			0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC,
			0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
			0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
			0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967,
			0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
			0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
			0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
			0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
			0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
			0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
			0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
			0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
		],

		hash = [
			0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
			0x510E527F, 0x9B05688C,0x1F83D9AB, 0x5BE0CD19
		],

		transforms = {
			'safeAdd': function(a, b)
			{
				var t1 = (a & 0xFFFF) + (b & 0xFFFF),
					t2 = (a >> 16) + (b >> 16) + (t1 >> 16);

				return (t2 << 16) | (t1 & 0xFFFF);
			},
			'a': function(a, b)
			{
				return (a >>> b) | (a << (32 - b));
			},
			'b': function(a, b)
			{
				return (a >>> b);
			},
			'c': function(a, b, c)
			{
				return ((a & b) ^ ((~a) & c));
			},
			'd': function(a, b, c)
			{
				return ((a & b) ^ (a & c) ^ (b & c));
			},
			's0': function(a)
			{
				return (transforms.a(a, 2) ^ transforms.a(a, 13) ^ transforms.a(a, 22));
			},
			's1': function(a)
			{
				return (transforms.a(a, 6) ^ transforms.a(a, 11) ^ transforms.a(a, 25));
			},
			'g0': function(a)
			{
				return (transforms.a(a, 7) ^ transforms.a(a, 18) ^ transforms.b(a, 3));
			},
			'g1': function(a)
			{
				return (transforms.a(a, 17) ^ transforms.a(a, 19) ^ transforms.b(a, 10));
			}
		};

	function stringToBin(string, size)
	{
		var bin = Array(),
			mask = (1 << size) - 1;

		for(var i = 0; i < string.length * size; i += size)
		{
			bin[i >> 5] |= (string.charCodeAt(i / size) & mask) << (24 - i % 32);
		}

		return bin;
	}

	function binToHex(bin, hexUpperCase)
	{
		var result = '',
			chars = hexUpperCase ? "0123456789ABCDEF" : "0123456789abcdef";

		for(var i = 0; i < bin.length * 4; i++)
		{
			result += chars.charAt((bin[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + chars.charAt((bin[i >> 2] >> ((3 - i % 4) * 8  )) & 0xF);
		}

		return result;
	}
	
	function core(bin, size)
	{
		var t1, t2, i, j,
			w = new Array(64),
			trans = transforms,
			safe = trans.safeAdd,
			a, b, c, d, e, f, g, h, i, j;

		bin[size >> 5] |= 0x80 << (24 - size % 32);
		bin[((size + 64 >> 9) << 4) + 15] = size;

		for (i = 0; i < bin.length; i += 16)
		{
			a = hash[0];
			b = hash[1];
			c = hash[2];
			d = hash[3];
			e = hash[4];
			f = hash[5];
			g = hash[6];
			h = hash[7];

			for (j = 0; j < 64; j++)
			{
				if (j < 16)
				{
					w[j] = bin[j + i];
				}
				else
				{
					w[j] = safe(safe(safe(trans.g1(w[j - 2]), w[j - 7]), trans.g0(w[j - 15])), w[j - 16]);
				}

				t1 = safe(safe(safe(safe(h, trans.s1(e)), trans.c(e, f, g)), table[j]), w[j]);
				t2 = safe(trans.s0(a), trans.d(a, b, c));

				h = g;
				g = f;
				f = e;
				e = safe(d, t1);
				d = c;
				c = b;
				b = a;
				a = safe(t1, t2);
			}

			hash[0] = safe(a, hash[0]);
			hash[1] = safe(b, hash[1]);
			hash[2] = safe(c, hash[2]);
			hash[3] = safe(d, hash[3]);
			hash[4] = safe(e, hash[4]);
			hash[5] = safe(f, hash[5]);
			hash[6] = safe(g, hash[6]);
			hash[7] = safe(h, hash[7]);
		}

		return hash;
	}

	function sha256(s, size, hexUpperCase)
	{
		var bin = stringToBin(s.toUTF8(), size),
			proc = core(bin, s.length * size);

		return binToHex(proc, hexUpperCase);
	}
    
    String.implement({
       'toSHA256': function()
       {
           return sha256(this, 8, 0);
       } 
    });

})();

/*
---
description: String UTF8 encoding.
license: MIT-style
authors: [Christopher Pitt]
provides: [String.toUTF8]
requires: 
  core/1.2.4: [String]
...
*/

(function() {

	function utf8(string)
	{
		var a, b, result = '',
		from = String.fromCharCode;

		for (a = 0; b = string.charCodeAt(a); a++)
		{
			if (b < 128)
			{
				result += from(b);
			}
			else if ((b > 127) && (b < 2048))
			{
				result += from((b >> 6) | 192);
				result += from((b & 63) | 128);
			}
			else
			{
				result += from((b >> 12) | 224);
				result += from(((b >> 6) & 63) | 128);
				result += from((b & 63) | 128);
			}
		}

		return result;
	}

	String.implement({
		'toUTF8': function()
		{
			return utf8(this);
		}
	});

})();

