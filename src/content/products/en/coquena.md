---
title: Coquena
tagline: Your own language model server, on your machine, without fighting the configuration.
description: Coquena sets up and manages a local llama.cpp server on Windows. It installs the engine, downloads verified models, and leaves a server ready for your apps.
version: '0.1.0'
platform: Windows x64
features:
  - title: Picks the right engine
    body: Detects your hardware and installs the matching official llama.cpp build, for CPU, NVIDIA (CUDA), or Vulkan.
  - title: Download models with confidence
    body: Choose GGUF models from Hugging Face. Coquena verifies every file, handles models split into parts, and lets you pause and resume downloads.
  - title: Keeps your settings
    body: Each model becomes a preset with its parameters. No more long command lines or scripts to maintain.
  - title: One server, many models
    body: Expose several presets behind a single local server and pick the model from your app.
  - title: You stay in control
    body: Run it in the foreground or in the background, stop it, restart it, and check metrics and logs whenever you need.
requirements:
  - 64-bit Windows (x64).
  - No .NET installation required.
  - Disk space and memory depending on the models you choose.
steps:
  - label: Install the engine that fits your machine
    code: .\coquena.exe backend install
  - label: Download a model
    code: .\coquena.exe model download user/repository
  - label: Create a preset and add it to the server
    code: |-
      .\coquena.exe preset create user/repository:quantization my-model
      .\coquena.exe server default preset add my-model
  - label: Start the server
    code: .\coquena.exe server default start -d
stepsNote: With the default settings, the server listens on http://127.0.0.1:9931. Use my-model as the model name in any client compatible with the llama.cpp API.
repo: https://github.com/mstranich/coquena
release: https://github.com/mstranich/coquena/releases/latest
docs: https://github.com/mstranich/coquena#readme
---

In Andean folklore, Coquena is a small shepherd who looks after the mountain's animals. The name brings that image to llama.cpp: a guardian that looks after your "llamas," keeps them organized, respects your machine's resources, and gets their environment ready for work.
