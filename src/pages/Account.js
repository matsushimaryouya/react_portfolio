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
                  はじめまして。現在はフリーでWeb制作をしております。Web制作経験は2年です。
                  <br />
                  <br />
                  前職では、デザインやコーディングの仕事以外にもUnityやBlenderを使った仕事も
                  行っていました。 学生の頃から趣味でやっていたゲーム制作や3DCGが仕事に繋がることも
                  多いため、 Web関連以外の新しい技術も取り入れるようにしています。
                  <br />
                  <br />
                  今回、Reactのポートフォリオを作成したのは仕事でReactを
                  使用する機会があり、その際に扱いやすかったためです。
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
                  地元が群馬で冬は地元の友人とスノーボードをしています！
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
