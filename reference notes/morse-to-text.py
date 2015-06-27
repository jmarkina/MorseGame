'''
Write a program that can translate Morse code in the format of ...---...

A space and a slash will be placed between words. ..- / --.-

For bonus, add the capability of going from a string to Morse code.

Super-bonus if your program can flash or beep the Morse.

This is your Morse to translate:

.... . .-.. .-.. --- / -.. .- .. .-.. -.-- / .--. .-. --- --. .-. .- -- -- . .-. / --. --- --- -.. / .-.. ..- -.-. -.- / --- -. / - .... . / -.-. .... .- .-.. .-.. . -. --. . ... / - --- -.. .- -.--
'''
#Begin by defining morse code.
#"/" and " " are included in the code array and will be handled like any other character
code = [['a', '.-'], ['b', '-...'], ['c', '-.-.'], ['d', '-..'], ['e', '.'], ['f', '..-.'], ['g', '--.'], ['h', '....'], ['i', '..'], ['j', '.---'], ['k', '-.-'], ['l', '.-..'], ['m', '--'], ['n', '-.'], ['o', '---'], ['p', '.--.'], ['q', '--.-'], ['r', '.-.'], ['s', '...'], ['t', '-'], ['u', '..-'], ['v', '...-'], ['w', '.--'], ['x', '-..-'], ['y', '-.--'], ['z', '..--'], ['1', '.----'], ['2', '..---'], ['3', '...--'], ['4', '....-'], ['5', '.....'], ['6', '-....'], ['7', '--...'], ['8', '---.'], ['9', '----.'], ['0', '-----'], [' ', '/']] 

def deMorse(data):
	text = ""
	input_text = data.split(' ')				#divide the morse string into a list
	
	for i in range (len(input_text)):			#cycle through the morse list
		for z in range (len(code)):				#for each item in the morse list, cycle through the code array
			if input_text[i] == code[z][1]:		#match the morse code letter to an element in the code array
				text = text + code[z][0]		#if a match is found, add it to the output string
			else:								#otherwise, go on to the next item in the code array
				continue
	return text									#return the finished string

def encodeText(data):
	morse = ""
	for i in range (len(data)):					#cycle through the plain text string
		for z in range (len(code)):				#for each character in the text string, cycle through the code array
			if data[i] == code[z][0]:			#match a letter to its morse equivalent
				morse = morse + code[z][1] + " "#add the morse letter to the output string, followed by a space
			else:								#skip anything that isn't in the code array
				continue
	return morse								#return the encoded string
			
rawdata = raw_input("Enter: ")					#get text from the user

data = str(rawdata).lower()						#make sure the input is a lowercase string
												#assume that natural language sentences do not start with "." or "-"
if (data[0] == '.' or data[0] == '-'):			#guess whether the input is morse or plain text
	print deMorse(data)							#if morse, decode
else:
	print encodeText(data)						#if plain text, encode