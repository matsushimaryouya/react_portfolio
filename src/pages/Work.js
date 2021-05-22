import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Card,
  CardActionArea,
  CardMedia,
  // CardContent,
  Typography,
  CardActions,
  // Button,
} from '@material-ui/core';
// ニューモフィズム----------
import {
  Card,
  CardContent,
  Button
} from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
// -----------------------

const ProductList = () => (
  <>
    <Helmet>
      <title>Matsushima Portfolio | Work</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box>
          <Grid
            container
            spacing={3}
          >
            {/* Work1 */}
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
                  height: '100%'
                }}
                style={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={`${process.env.PUBLIC_URL}/static/images/other/hp4.png`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      新成長産業戦略的育成事業
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      PHP/WordPress/
                      <br />
                      Wordpress導入。複合検索実装。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a style={{ margin: 'auto' }} href="https://www.shizuoka-shinseicho.jp/">
                      <Button style={{ margin: 'auto' }} sx={{ margin: 'auto' }} size="small" color="primary" variant="contained" href="https://www.shizuoka-shinseicho.jp/">
                        Link
                      </Button>
                    </a>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
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
                  height: '100%'
                }}
                style={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={`${process.env.PUBLIC_URL}/static/images/other/hp5.png`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      香川証券バーチャルタレントプロジェクト
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Blender/Unity
                      <br />
                      表情モーションの追加。モデルの顔の修正。モーションキャプチャー導入。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a style={{ margin: 'auto' }} href="https://kamigayamai.com/">
                      <Button style={{ margin: 'auto' }} sx={{ margin: 'auto' }} size="small" color="primary" variant="contained" href="https://kamigayamai.com/">
                        Link
                      </Button>
                    </a>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Work3 */}
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
                  height: '100%'
                }}
                style={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={`${process.env.PUBLIC_URL}/static/images/other/hp1.png`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      TOKAIアクア
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Adobe XD/Illustrator/HTML/CSS
                      <br />
                      問合せフォーム改修。デザイン。コーディング
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a style={{ margin: 'auto' }} href="https://aqua.tokai.jp">
                      <Button style={{ margin: 'auto' }} sx={{ margin: 'auto' }} size="small" color="primary" variant="contained" href="https://aqua.tokai.jp">
                        Link
                      </Button>
                    </a>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Work4 */}
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
                  height: '100%'
                }}
                style={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={`${process.env.PUBLIC_URL}/static/images/other/hp2.png`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      IAI
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Illustrator/Adobe XD/JavaScript/HTML/CSS
                      <br />
                      トップページ改修。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a style={{ margin: 'auto' }} href="https://www.iai-robot.co.jp">
                      <Button style={{ margin: 'auto' }} sx={{ margin: 'auto' }} size="small" color="primary" variant="contained" href="https://www.iai-robot.co.jp">
                        Link
                      </Button>
                    </a>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Work6 */}
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
                  height: '100%'
                }}
                style={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={`${process.env.PUBLIC_URL}/static/images/other/tokochan.png`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      トコちゃんWEB
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Illustrator
                      <br />
                      バナー作成。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a style={{ margin: 'auto' }} href="https://tocochan.tv/">
                      <Button style={{ margin: 'auto' }} sx={{ margin: 'auto' }} size="small" color="primary" variant="contained" href="https://tocochan.tv/">
                        Link
                      </Button>
                    </a>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Work7 */}
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
                  height: '100%'
                }}
                style={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={`${process.env.PUBLIC_URL}/static/images/other/hp3.png`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pegion
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      jQuery/JavaScript/HTML/CSS
                      <br />
                      ローディングアニメーション導入。ホバーアニメーション導入
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a style={{ margin: 'auto' }} href="https://www.pigeonhomeproducts.com/">
                      <Button style={{ margin: 'auto' }} sx={{ margin: 'auto' }} size="small" color="primary" variant="contained" href="https://www.pigeonhomeproducts.com/">
                        Link
                      </Button>
                    </a>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;
