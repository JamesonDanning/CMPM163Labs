# CMPM163Labs
<h3>Lab8: Part 1</h3>

![](images/district9.jpg)
![](images/slums.png)

<p>I used the slums from the movie district 9 as inspiration. The homes are very tightly packed and made out of scraps and trash. I found a unity package featuring a few of these types of buildings, so I used that. The challenging part, and what I did extra, was change the rotation values of each building, matching the style in the image. The buildings are not perfectly straight. I did this by setting a random int at the start of each loop, between -10 and 15. In the instantiate code, instead of Quaternion.Identity, I used Quaternion.Euler(0,randomInt,0). Additionally, I added a dirt texture to the ground.</p>
<p> As of now, I cannot find my partner, Haoran Chang, on discord. Their name doesn't show up, and I have not been messaged either</p>

<h3>Lab7: Part 1</h3>
<b>Video:</b> https://drive.google.com/file/d/1YTTmpAQEJ8ZklEMR-Tl3dk1oDM5j6ZMN/view?usp=sharing
<p>I made my scene by using the shader from part 1 (with some modifications) to generate mountain peaks from a plane. I changed its color and gave it a normal map to resemble desert dunes. Next, I made the water shader. I had to follow a different tutorial because the one given had nothing but problems, but I still did it with shader code instead of the graph. I added a terrain and sculpted a little cutout for the water. I dropped the water into the little cutout, and positioned everything nicely. I added some random dessert plant assets I found to tie it all together. Also, I added a sky and fog volume just for a little better look, plus a directional light</p>
<p> My partner was not done at my time of submission, and we did not help each other </p>

<h3>Lab6: Part 1</h3>

![](images/labss.png)
<b>point light:</b> A lightsource that shines in all directions radiating from a single point. <b>Directional Light:</b> Acts like the sun, angle is what matters, not position, and effects all objects globally. <b>Spot light:</b> A lightsource that shines only in a specified cone angle and range. <b>Area light:</b> Only for baked lighting, illuminates objects to one side of it's plane.
![](images/comparison.png)
<p>I made my material look like my water bottle by setting its albedo to a yellow color and setting its smoothness to low, and metallic to low.</p>
  <p>I added a floor with a rock texture, and short walls with a plaster texture. I also added a nice sunset skybox.</p>
  





<h3>Lab5: </h3>
I did Part 1
Video: https://drive.google.com/file/d/1UvFAdvwpC8dwahnBK2aQGKxZ2ov6NdW1/view?usp=sharing
My mods: For the particles, I made them orange and look like sparks flying out of the kart's exhaust. I created 2 new materials. For the player material, I changed the albedo and normal map to that of rough stone. For the ground, I did the same but with a mossy grass texture and normal map. Lastly, I added a really pretty skybox, and I got the asset from the unity store.


LAB 4: TopLeft- Cube using texture A and normal map with built in texture functionality. 
TopMiddle- Cube using just texture A with built in texture functionality, from given code.
TopRight- Cub using texture B and normal map with built in texture functionality.
BottomLeft - Cube with texture C loaded with shaders, given code.
Bottom Right - Cube with texture D tiled with shaders. I added a check to see if the coordinate values were over the middle and subtracted by that amount. I then doubled the uv coordinates to make it a 2x2 tiled texture.
24-A: x = 7U, 24-B: y = 7-7V, 24-C: Light grey
VIDEO:https://drive.google.com/file/d/1RvuSz9o2xQiWncCKeKBGSXwGVEGxRmmm/view?usp=sharing


LAB 3:
  VIDEO: https://drive.google.com/file/d/1QmAbsd8bA_K8N0Il5IcTnq81k8V-5Alo/view?usp=sharing
 TOP CUBE- my shader that sets the cube to a rainbow. Removed the mix and uniforms and not setting a specific color.
  LEFT CUBE-my material with a wireframe, colored pink and is pink emissive as well
  CENTER CUBE- The given cube material, grey with green specular
  RIGHT CUBE- given shader, interpolates between blue/green



video: https://drive.google.com/file/d/1QVgNTmX-pl46-ZUmYZsG0yxcRLbK-mSH/view?usp=sharing
![](images/lab2part2.png)
