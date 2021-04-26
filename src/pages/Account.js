import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Card,
  // CardContent,
  Typography
} from '@material-ui/core';
// ニューモフィズム----------
import {
  Card, CardContent
} from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
// -----------------------
import AccountProfile from 'src/components/account/AccountProfile';

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
                <Typography variant="h2" gutterBottom>
                  <br />
                  自己紹介
                </Typography>
                <Typography variant="p" gutterBottom>
                  現在、フリーでWeb制作をしております。Web制作経験は2年です。
                  <br />
                  <br />
                  前職では人数も少なかったため、デザインからコーディング等色々な仕事を行っていました。
                  趣味でやっていたゲーム制作や3DCGが仕事に繋がることも多いため、
                  Web・Web関連以外にも新しい技術を取り入れるようにしています。
                  <br />
                  <br />
                  今回、Reactでポートフォリオを作成したのはECサイトを制作する仕事でReactを
                  使用する機会があり扱いやすかったためです。Unityを大学生の頃から触っていたため、
                  コンポーネント指向のReactがとても使いやすいです。
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
                <Typography variant="h2" gutterBottom>
                  趣味・特技
                </Typography>
                <Typography variant="p" gutterBottom>
                  【スノーボード】
                  <br />
                  地元が群馬なため冬は地元の友人とスノーボードをしています。
                  <br />
                  <br />
                  【3DCG】
                  <br />
                  Blenderというソフトでモデリング・アニメーションを作成しSNSやYoutubeに投稿しています。
                  Webの分野でも使えるよう、WebGLやThree.jsを使用した作品も制作しています。
                  <br />
                  <br />
                  【ゲーム・アプリ制作】
                  <br />
                  ゲームやアプリをUnity・UnrealEngineで制作しています。現在、3人のチームでUnrealEngineで
                  VRの謎解きゲームを開発中です！
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  </>
);

export default Account;
