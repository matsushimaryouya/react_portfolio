import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Card,
  // CardContent,
  CardActionArea,
  CardMedia,
  // CardActions,
  Typography
} from '@material-ui/core';
// ニューモフィズム----------
import {
  Card, CardContent
} from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import ReactPlayer from 'react-player';
// -----------------------
import AccountProfile from 'src/components/account/AccountProfile';
import Movie1 from './weatherApp.mp4';
import Movie2 from './vfx.mp4';
import Movie3 from './openCV2.mp4';
import Movie4 from './summon.mp4';

const Account = () => (
  <>
    <Helmet>
      <title>Matsushima Portfolio | Profile</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                <AccountProfile />
              </Grid>
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
                <Typography variant="h2" gutterBottom style={{ marginTop: 15 }}>
                  Profile
                </Typography>
                <Typography variant="p" gutterBottom>
                  2019年7月にWeb・アプリ制作会社へ入社し、2020年8月まで在籍しました。
                  <br />
                  現在はフリーでアプリ開発とWeb制作を請け負っております。
                  <br />
                  <br />
                  これまで3年、ネイティブアプリ・Web制作を担当しました。
                  <br />
                  <br />
                  【趣味】
                  <br />
                  地元が群馬で冬は地元の友人とスノーボードをしています！
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            marginTop: 5
            // py: 3
          }}
        >
          <Container maxWidth={false} style={{ padding: 0 }}>
            <Box>
              <Grid
                container
                spacing={3}
              >
                {/* Work2 */}
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ maxWidth: 345, padding: 10 }}
                  >
                    <CardActionArea>
                      <ReactPlayer
                        className="womanAnim"
                        url={Movie1}
                        controls={false}
                        loop
                        config={{
                          file: {
                            attributes: {
                              autoPlay: true,
                              muted: true
                            }
                          }
                        }}
                        height="50%"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          天気予報ARアプリ
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Unity/iOS/Android
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work1 */}
                <Grid
                  item
                  lg={8}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ padding: 10 }}
                  >
                    <CardActionArea>
                      <ReactPlayer
                        className="womanAnim"
                        url={Movie2}
                        controls={false}
                        loop
                        config={{
                          file: {
                            attributes: {
                              autoPlay: true,
                              muted: true
                            }
                          }
                        }}
                        height={50}
                        // style={{ minHeight: 250 }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          動画制作
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blender/After Effects
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work1 */}
                <Grid
                  item
                  lg={8}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ padding: 10 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 350, borderRadius: 5 }}
                        image={`${process.env.PUBLIC_URL}/static/images/other/photoshopImg.png`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          画像編集
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Photoshop
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work2-2 */}
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ maxWidth: 345, padding: 10 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 200, borderRadius: 5 }}
                        image={`${process.env.PUBLIC_URL}/static/images/other/meron.png`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Melon Soda
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blender/3DCG/モデリング
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work1 */}
                <Grid
                  item
                  lg={8}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ padding: 10 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 350, borderRadius: 5 }}
                        image={`${process.env.PUBLIC_URL}/static/images/other/cream.jpg`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Cream Soda
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blender
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work2-1 */}
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ maxWidth: 345, padding: 10 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 200, borderRadius: 5 }}
                        image={`${process.env.PUBLIC_URL}/static/images/other/cream2.jpg`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Cream Soda
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blender/3DCG/モデリング
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work5-1 */}
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ maxWidth: 345, padding: 10 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 200, borderRadius: 5 }}
                        image={`${process.env.PUBLIC_URL}/static/images/other/model3.jpg`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          アバター制作
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blender/3DCG/モデリング
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work5-2 */}
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ maxWidth: 345, padding: 10 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 200, borderRadius: 5 }}
                        image={`${process.env.PUBLIC_URL}/static/images/other/model2.jpg`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          アバター制作
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blender/3DCG/モデリング
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work5-3 */}
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{ maxWidth: 345, padding: 10 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 200, borderRadius: 5 }}
                        image={`${process.env.PUBLIC_URL}/static/images/other/model.jpg`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          アバター制作
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Blender/3DCG/モデリング
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work2 */}
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <CardActionArea>
                      <ReactPlayer
                        className="womanAnim"
                        url={Movie3}
                        controls={false}
                        loop
                        config={{
                          file: {
                            attributes: {
                              autoPlay: true,
                              muted: true
                            }
                          }
                        }}
                        style={{ padding: 10 }}
                        height="50%"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          openCV
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Unity/iOS/Android
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* Work5-3 */}
                <Grid
                  item
                  lg={6}
                  md={12}
                  xs={12}
                >
                  <a
                    href="https://www.youtube.com/watch?v=CM1Qv0Crp8c"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                      }}
                      style={{ padding: 10 }}
                    >
                      <CardActionArea>
                        <CardMedia
                          style={{ height: 300, borderRadius: 5 }}
                          image={`${process.env.PUBLIC_URL}/static/images/other/mujin.png`}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            無人配信【リンクあります！】
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Unity
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </a>
                </Grid>
                {/* Work5-3 */}
                <Grid
                  item
                  lg={6}
                  md={12}
                  xs={12}
                >
                  <a
                    href="https://www.youtube.com/watch?v=CM1Qv0Crp8c"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                      }}
                      style={{ padding: 10 }}
                    >
                      <CardActionArea>
                        <CardMedia
                          style={{ height: 300, borderRadius: 5 }}
                          image={`${process.env.PUBLIC_URL}/static/images/other/mujinStream.png`}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            無人配信【リンクあります】
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Unity
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </a>
                </Grid>
                {/* Work2 */}
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <CardActionArea>
                      <ReactPlayer
                        className="womanAnim"
                        url={Movie4}
                        controls={false}
                        loop
                        config={{
                          file: {
                            attributes: {
                              autoPlay: true,
                              muted: true
                            }
                          }
                        }}
                        style={{ padding: 10 }}
                        height="50%"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          VUIによるオブジェクトの召喚
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Unity/Oculus
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  </>
);

export default Account;
