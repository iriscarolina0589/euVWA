# euVWA - Exploitable Vulnerable Web Application

Este proyecto es una adaptación de una aplicación tipo DVWA desarrollada en Node.js + Express. Su objetivo es implementar diferentes vulnerabilidades web de forma intencionada para su análisis y explotación, junto con una versión segura donde se aplican buenas prácticas de desarrollo seguro (Secure Coding).

El proyecto está dividido en dos versiones:
- main-vulnerable → versión con vulnerabilidades activas
- main-secure → versión con mitigaciones de seguridad

## Instalación y ejecución del proyecto

Este proyecto está desarrollado con Node.js y Express, por lo que es necesario tener instalado Node.js y npm en el sistema.

### Requisitos previos

- Node.js (versión recomendada: 16 o superior)
- npm (incluido con Node.js)
- Git (opcional para clonar el repositorio)

Para comprobar que están instalados:

node -v
npm -v
git --version

Clonar el repositorio:

git clone https://github.com/iriscarolina0589/euVWA.git
cd euVWA

## Ejecución de la versión vulnerable

La versión vulnerable contiene todas las vulnerabilidades implementadas de forma intencionada para su explotación.

cd main-vulnerable
npm install
node app.js

Una vez ejecutado, la aplicación estará disponible en:
http://localhost:3000

## Ejecución de la versión segura

La versión secure contiene las mismas funcionalidades, pero con medidas de seguridad aplicadas para mitigar las vulnerabilidades.

```bash
cd main-secure
npm install
node app.js

Acceso a la aplicación:

http://localhost:3000

## Verificación de funcionamiento

Para comprobar que ambas versiones funcionan correctamente:

- En la versión vulnerable se pueden reproducir ataques como SQL Injection, XSS o Command Injection.
- En la versión secure estos mismos intentos deben ser bloqueados o neutralizados.


## Comparación de vulnerabilidades y mitigaciones

A continuación se describe cada vulnerabilidad implementada en la versión vulnerable y cómo fue corregida en la versión secure.


SQL Injection

Vulnerable: Permite manipular consultas SQL usando entradas como OR 1=1

Secure: Se utilizan consultas parametrizadas (prepared statements)

Corrección técnica: Se evita la concatenación directa de strings en SQL




XSS Reflejado

Vulnerable: Ejecuta scripts inyectados en la URL o formulario

Secure: Se escapan caracteres HTML

Corrección técnica: Encoding de salida antes de renderizar en el navegador




XSS Almacenado

Vulnerable: Guarda scripts maliciosos en el sistema

Secure: Sanitización antes de guardar datos

Corrección técnica: Validación en backend antes de persistir datos



Command Injection

Vulnerable: Permite ejecución de comandos del sistema operativo

Secure: Bloqueo de ejecución directa

Corrección técnica: Eliminación de funciones como exec con input del usuario



File Upload Inseguro

Vulnerable: Permite subir cualquier archivo

Secure: Restricción de tipo de archivo

Corrección técnica: Validación MIME + extensión permitida



Broken Authentication

Vulnerable: Login débil sin protección adecuada

Secure: Autenticación controlada

Corrección técnica: Validación segura de credenciales



Sensitive Data Exposure

Vulnerable: Expone información sensible en respuestas

Secure: Datos filtrados o protegidos

Corrección técnica: Control de salida y ocultación de información



Security Misconfiguration

Vulnerable: Errores visibles al usuario

Secure: Mensajes genéricos de error

Corrección técnica: Middleware de manejo de errores seguro


Tabla comparativa de vulnerabilidades (Vulnerable vs Secure)

| Vulnerabilidad | Versión vulnerable | Versión secure | Corrección técnica aplicada |
|------|------|------|------|
| SQL Injection | Permite inyección de consultas como `OR 1=1` | No permite manipulación de consultas | Uso de consultas parametrizadas y validación de inputs |
| XSS Reflejado | Ejecuta scripts introducidos por URL o formulario | No ejecuta scripts en el navegador | Escape de caracteres HTML (output encoding) |
| XSS Almacenado | Guarda scripts maliciosos en el servidor | Filtra datos antes de almacenarlos | Sanitización de entrada en backend |
| Command Injection | Permite ejecución de comandos del sistema | Bloquea ejecución de comandos | Eliminación de ejecución directa y validación estricta |
| Insecure File Upload | Permite subir cualquier archivo | Restringe tipos de archivo permitidos | Validación de MIME type y extensión |
| Broken Authentication | Login débil o vulnerable a bypass | Autenticación controlada y segura | Validación robusta de credenciales |
| Sensitive Data Exposure | Expone datos sensibles sin protección | Oculta o protege información sensible | Filtrado de respuestas y control de datos |
| Security Misconfiguration | Muestra errores internos del sistema | Mensajes de error genéricos | Manejo seguro de errores mediante middleware |



Comparación general

La diferencia principal entre ambas versiones radica en la aplicación de controles de seguridad.

En la versión vulnerable, las entradas del usuario son procesadas sin validación ni sanitización, lo que permite la explotación directa de vulnerabilidades comunes.

En la versión secure, se aplican mecanismos de protección como validación de datos, escape de salida, control de ejecución de comandos y restricción de archivos, siguiendo buenas prácticas basadas en OWASP.



Listado de vulnerabilidades y evidencias

A continuación se listan las vulnerabilidades implementadas en la versión vulnerable de la aplicación.

Las evidencias de explotación se incluyen en:

- Documento PDF: `evidencias.pdf`
- Carpeta de vídeos: `/videos`

---

### 1. SQL Injection
Manipulación de consultas SQL mediante entrada del usuario (ej: `OR 1=1`), permitiendo acceder a datos sin autorización.

---

### 2. Cross-Site Scripting (XSS) Reflejado
Inyección de scripts que se ejecutan en el navegador del usuario a través de entradas no filtradas.

---

### 3. Cross-Site Scripting (XSS) Almacenado
El código malicioso se almacena en el sistema y se ejecuta cuando otros usuarios acceden a la información.

---

### 4. Command Injection
Permite la ejecución de comandos del sistema operativo mediante entradas manipuladas.

---

### 5. Insecure File Upload
Subida de archivos sin validación de tipo o contenido, permitiendo potencial ejecución de código malicioso.

---

### 6. Broken Authentication
Sistema de autenticación vulnerable que permite accesos indebidos o bypass de login.

---

### 7. Sensitive Data Exposure
Exposición de información sensible sin protección adecuada.

---

### 8. Security Misconfiguration
Configuración insegura del sistema que expone errores internos o información sensible.

Conclusión

El desarrollo de este proyecto me ha permitido implementar de forma práctica diversas vulnerabilidades incluidas en el OWASP Top 10, comprendiendo no solo cómo funcionan, sino también cómo pueden ser explotadas en un entorno real.

La creación de dos versiones de la aplicación (vulnerable y secure) ha sido clave para observar de forma directa el impacto de aplicar buenas prácticas de desarrollo seguro. Mientras que la versión vulnerable permite la explotación de fallos comunes como SQL Injection, XSS o Command Injection, la versión secure demuestra cómo estos pueden mitigarse mediante validación de entradas, sanitización de datos, control de errores y otras medidas de seguridad.

En conjunto, este trabajo refuerza la importancia de integrar la seguridad desde las primeras fases del desarrollo de software, evidenciando que pequeñas mejoras en el código pueden prevenir vulnerabilidades críticas.
