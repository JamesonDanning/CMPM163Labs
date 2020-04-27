uniform sampler2D texture1;
varying vec2 vUv;

void main() {
  float tilesize = 2.0;
  vec2 temp = vUv;
  if(temp.x > 0.5){
    temp.x -= 0.5;
  }
  if(temp.y > 0.5){
    temp.y -= 0.5;
  }
  gl_FragColor = texture2D(texture1, temp*2.0);


}

