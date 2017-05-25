# neutrino-preset-visualizer

Webpack visualizer as a Neutrino preset to view where space is allocated. Outputs ./build/stats.html.

![](https://dl.dropboxusercontent.com/u/6396913/misc/Screen%20Shot%202017-05-25%20at%201.18.22%20PM.png)

## Installation

Grab the preset:

```
$ yarn add -D neutrino-preset-visualizer
```

Add it to your package.json:

```json
{
  "neutrino": {
    "use": [
      "neutrino-preset-react",
      "neutrino-preset-visualizer"
    ]
  }
}
```

---

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

<a href="https://apex.sh"><img src="http://tjholowaychuk.com:6000/svg/sponsor"></a>
