
var fs = require('fs');

// https://github.com/substack/brfs

var vertexShader

module.exports = function() {
  return new THREE.ShaderMaterial({

    uniforms: {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      color: [1, 0.5, 0.5, 1]
    },
    attributes: {
      aAlpha: {
        type: 'f',
        value: [1,0.5,0]
      }
    },
    vertexShader: 
    'attribute float aAlpha; \
    varying float vAlpha; \
    void main() { \
      vAlpha = aAlpha; \
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 ); \
    }',
    fragmentShader: 
    'precision highp float; \
    varying float vAlpha; \
    void main(void) { \
      gl_FragColor = vec4(0.5, 1.0, 0.2, 1.0); \
    }',side: THREE.DoubleSide,

  });
}



