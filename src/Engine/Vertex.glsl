
attribute vec3 a_possiton;

void main()
{
   gl_Position = vec4(a_possiton, 1.0);   
}