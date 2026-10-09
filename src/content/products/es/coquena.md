---
title: Coquena
tagline: Tu propio servidor de modelos de lenguaje, en tu máquina y sin pelearte con la configuración.
description: Coquena prepara y gestiona un servidor local de llama.cpp en Windows. Instala el motor, descarga modelos verificados y deja un servidor listo para tus aplicaciones.
version: '0.1.0'
platform: Windows x64
features:
  - title: Elegí el motor adecuado
    body: Detecta tu hardware e instala la versión oficial de llama.cpp que le corresponde, para CPU, NVIDIA (CUDA) o Vulkan.
  - title: Descargá modelos con confianza
    body: Elegí modelos GGUF de Hugging Face. Coquena verifica cada archivo, une los modelos divididos en partes y permite pausar y retomar descargas.
  - title: Guardá tu configuración
    body: Cada modelo queda como un preset con sus parámetros. No más líneas de comando largas ni scripts que mantener.
  - title: Un servidor, varios modelos
    body: Publicá varios presets detrás de un único servidor local y elegí el modelo desde tu aplicación.
  - title: Lo controlás todo
    body: Arrancalo en primer plano o en segundo plano, detenelo, reinicialo y consultá métricas y logs cuando lo necesites.
requirements:
  - Windows de 64 bits (x64).
  - No hace falta instalar .NET.
  - Espacio en disco y memoria según los modelos que elijas.
steps:
  - label: Instalá el motor compatible con tu equipo
    code: .\coquena.exe backend install
  - label: Descargá un modelo
    code: .\coquena.exe model download usuario/repositorio
  - label: Creá un preset y sumalo al servidor
    code: |-
      .\coquena.exe preset create usuario/repositorio:cuantizacion mi-modelo
      .\coquena.exe server default preset add mi-modelo
  - label: Arrancá el servidor
    code: .\coquena.exe server default start -d
stepsNote: Con la configuración inicial, el servidor queda escuchando en http://127.0.0.1:9931. Usá mi-modelo como nombre de modelo en cualquier cliente compatible con la API de llama.cpp.
repo: https://github.com/mstranich/coquena
release: https://github.com/mstranich/coquena/releases/latest
docs: https://github.com/mstranich/coquena#readme
---

En el folclore andino, el Coquena es un pequeño pastor que cuida a los animales del cerro. El nombre lleva esa imagen a llama.cpp: un guardián que cuida tus "llamas", las mantiene en orden, respeta los recursos de tu máquina y les prepara el terreno para trabajar.
