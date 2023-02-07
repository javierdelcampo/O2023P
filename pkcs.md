| Resumen de los estándares PKCS  	|         	|                                                                                    	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------------------	|---------	|------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|                                 	| Versión 	| Nombre                                                                             	| Comentarios                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	|
| PKCS#1                          	| 2.2     	| Estándar criptográfico RSA                                                         	| Ver RFC 8017. Define el formato del cifrado RSA.                                                                                                                                                                                                                                                                                                                                                                                                                                                           	|
| PKCS#2                          	| -       	| Obsoleto                                                                           	| Definía el cifrado RSA de resúmenes de mensajes, pero fue absorbido por el PKCS#1.                                                                                                                                                                                                                                                                                                                                                                                                                         	|
| PKCS#3                          	| 1.4     	| Estándar de intercambio de claves Diffie-Hellman                                   	| Un  protocolo criptográfico que permite a dos partes sin conocimiento  previo una de la otra establecer conjuntamente una clave secreta  compartida, utilizando un canal de comunicaciones inseguro.                                                                                                                                                                                                                                                                                                       	|
| PKCS#4                          	| -       	| Obsoleto                                                                           	| Definía la sintaxis de la clave RSA, pero fue absorbido por el PKCS#1.                                                                                                                                                                                                                                                                                                                                                                                                                                     	|
| PKCS#5                          	| 2.1     	| Estándar de cifrado basado en contraseñas                                          	| Recomendaciones  para la implementación de criptografía basada en contraseñas, que  cubren las funciones de derivación de claves, esquemas de encriptación,  esquemas de autenticación de mensajes, y la sintaxis ASN.1 que  identifica las técnicas. Ver RFC 2898 y PBKDF2.                                                                                                                                                                                                                               	|
| PKCS#6                          	| 1.5     	| Estándar de sintaxis de certificados extendidos                                    	| Define extensiones a la antigua especificación de certificados X.509 versión 1. La versión 3 del mismo lo dejó obsoleto.                                                                                                                                                                                                                                                                                                                                                                                   	|
| PKCS#7                          	| 1.5     	| Estándar sobre la sintaxis del mensaje criptográfico                               	| Ver RFC 2315. Usado para firmar y/o cifrar mensajes en PKI. También usado para la diseminación de certificados (p.ej. como respuesta a un mensaje PKCS#10). Fue la base para el estándar S/MIME, ahora basado en la RFC 3852,  una actualización del estándar CMS Cryptographic Message Syntax,  utilizado para firmar digitalmente, obtener el digest, autenticar, o  cifrar arbitrariamente el contenido de un mensaje (no confundir con  Sistema de gestión de contenido -Content Management System-).  	|
| PKCS#8                          	| 1.2     	| Estándar sobre la sintaxis de la información de clave privada                      	| Ver RFC 5208.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
| PKCS#9                          	| 2.0     	| Tipos de atributos seleccionados                                                   	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            	|
| PKCS#10                         	| 1.7     	| Estándar de solicitud de certificación                                             	| Ver RFC 2986. Formato de los mensajes enviados a una Autoridad de certificación para solicitar la certificación de una clave pública.  Ver CSR.                                                                                                                                                                                                                                                                                                                                                            	|
| PKCS#11                         	| 2.40    	| Interfaz de dispositivo criptográfico ("Cryptographic Token Interface" o cryptoki) 	| Define un API genérico de acceso a dispositivos criptográficos (ver HSM).                                                                                                                                                                                                                                                                                                                                                                                                                                  	|
| PKCS#12                         	| 1.1     	| Estándar de sintaxis de intercambio de información personal                        	| Define un formato de fichero usado comúnmente para almacenar claves privadas con su certificado de clave pública protegido mediante clave simétrica.                                                                                                                                                                                                                                                                                                                                                       	|
| PKCS#13                         	| –       	| Estándar de criptografía de curva elíptica                                         	| (Aparentemente abandonado, la única referencia es una propuesta de 1998.)                                                                                                                                                                                                                                                                                                                                                                                                                                  	|
| PKCS#14                         	| –       	| Generación de número pseudo-aleatorios                                             	| (Aparentemente abandonado, no hay publicada documentación al respecto)                                                                                                                                                                                                                                                                                                                                                                                                                                     	|
| PKCS#15                         	| 1.1     	| Estándar de formato de información de dispositivo criptográfico                    	| Define un estándar que permite a los usuarios de dispositivos criptográficos identificarse con aplicaciones independientemente de la implementación del PKCS#11 cryptoki u otro API. RSA ha abandonado las partes relacionadas con la tarjeta IC de este estándar, subsumidas por el estándar ISO/IEC 7816-15. 1                                                                                                                                                                                           	|

[🧍](https://www.youtube.com/watch?v=lj0cI3XidFo)