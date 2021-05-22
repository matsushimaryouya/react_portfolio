import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Typography,
  // Card
} from '@material-ui/core';
// 追加分
import WeatherApp from 'src/components/Weather/Weather';
// ニューモフィズム----------
import {
  Card, CardContent
} from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
// -----------------------
import Lottie from 'lottie-react-web';
import animation from './key_animation.json';

const Top = () => (
  <>
    <Helmet>
      <title>Matsushima Portfolio | Top</title>
    </Helmet>
    <Box
      style={{ paddingBottom: 0 }}
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
        marginTop: -3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Card>
              <CardContent
                style={{
                  paddingTop: 15,
                  paddingBottom: 15
                }}
              >
                <WeatherApp
                  style={{
                    borderRadius: 30
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Card className="cardDecoNone">
              <Box>
                <Typography sx={{ textAlign: 'center' }} variant="h1" component="h2" gutterBottom>
                  React 天気予報アプリケーション
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <br />
                  このアプリケーションはアニメーションで「今日の天気」と「長袖か半袖を着るべきか」が、わかるアプリケーションです。
                  <br />
                  <br />
                  このアプリケーションを作成した目的は季節の変わり目などで今日着ていく服に悩むことが多い経験が私にあった為です。
                  PWAにも対応しているため、ネイティブアプリのように素早く天気の確認をすることも可能です。
                  <br />
                  <br />
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <img src={`${process.env.PUBLIC_URL}/static/images/other/cat.jpg`} width="100%" alt="img" />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Card className="cardDecoNone">
              <Typography variant="h2" gutterBottom>
                API
              </Typography>
              <Typography variant="p" gutterBottom>
                OpenWeatherMapという気象データを提供しているAPIで天気の情報を取得しています。
                検索バーからの入力で各都道府県の天気予報も可能です。
                <br />
                <br />
              </Typography>
              <Typography variant="h2" gutterBottom>
                PWA
              </Typography>
              <Typography variant="p" gutterBottom>
                ホーム画面にアイコンを追加することができ、表示するスピードが早い為ネイティブアプリのような使用感になります。
                <br />
                <br />
                <br />
              </Typography>
            </Card>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Card className="cardDecoNone">
              <Typography variant="h2" gutterBottom>
                3DCG
              </Typography>
              <Typography variant="p" gutterBottom>
                アプリケーション内の女性キャラクターは3DCGを使用して作成しました。
                モデリングからアニメーションまで作成可能です。
                <br />
                <br />
              </Typography>
              <Typography variant="h2" gutterBottom>
                AfterEffects
              </Typography>
              <Typography variant="p" gutterBottom>
                「くもり」「晴れ」「雨」はAfterEffectsを使用して作成しました。
              </Typography>
            </Card>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <img src={`${process.env.PUBLIC_URL}/static/images/other/cat.jpg`} width="100%" alt="img" />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <a
              href="https://car-color-change.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Card className="sectionTop">
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h1" component="h2" gutterBottom>
                    <br />
                    商品紹介Webアプリケーション
                    <br />
                    <br />
                    React × Unity
                  </Typography>
                  <img src={`${process.env.PUBLIC_URL}/static/images/other/carColorChange.png`} width="100%" alt="img" />
                  <Typography
                    style={{
                      textAlign: 'left',
                      padding: 10
                    }}
                    variant="body1"
                    gutterBottom
                  >
                    <br />
                    3Dデータを利用することで実物に近いビジュアルで商品を紹介出来る
                    Webアプリケーションです。右下のボタンを押すことで車の色の変更が可能です。
                    また、画面上をクリックしながらドラッグすることで車を360度見ることができます。
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    style={{
                      textAlign: 'left',
                      padding: 10
                    }}
                    variant="h2"
                    gutterBottom
                  >
                    Unity
                  </Typography>
                  <Typography
                    style={{
                      textAlign: 'left',
                      padding: 10
                    }}
                    variant="body1"
                    gutterBottom
                  >
                    3Dの部分はUnityを使用してリアルタイムレンダリングやモデルを回転させる
                    動作を行っております。
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    style={{
                      textAlign: 'left',
                      padding: 10
                    }}
                    variant="h2"
                    gutterBottom
                  >
                    React
                  </Typography>
                  <Typography
                    style={{
                      textAlign: 'left',
                      padding: 10
                    }}
                    variant="body1"
                    gutterBottom
                  >
                    UI部分はReactを使用しており、Reactの豊富なUIが使用可能です。
                    今回はMaterial UIを使用してカラーセレクトのボタンを作成しました。
                    <br />
                    ReactとUnityの双方向で値の受け渡しが可能です。
                    <br />
                    <br />
                  </Typography>
                </Box>
              </Card>
            </a>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Card className="sectionTop">
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h2" gutterBottom>
                  <br />
                  Loading Animation
                </Typography>
                <Lottie
                  options={{
                    animationData: animation
                  }}
                />
                <Typography style={{ textAlign: 'left', padding: 10 }} variant="h2" gutterBottom>
                  Lottie
                </Typography>
                <Typography style={{ textAlign: 'left', padding: 10 }} variant="body1" gutterBottom>
                  lottieというアニメーションのライブラリを使用して実装しました。AfterEffectsで作成した
                  アニメーションをWebやネイティブアプリに適用できるためCSSアニメーション等と比べると自由度が高いです。
                  また、ベクターイメージの描画となるためアニメーションを拡大しても劣化がありません。また、Gifアニメーション
                  と比較してもファイルのサイズは小さくなります。
                  <br />
                  <br />
                  このアニメーションはAfterEffectsで作成しました。鍵のイラストはIllustratorで作成しました。
                  <br />
                  <br />
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Card className="sectionTop cardDecoNone">
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h2" gutterBottom>
                  このポートフォリオについて
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Reactを使用して作成しました。ReactはUIが豊富に用意されているため、それらを活用して素早く作成することを意識して
                  作成しました。
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <img src={`${process.env.PUBLIC_URL}/static/images/other/cat.jpg`} width="100%" alt="img" />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Card className="cardDecoNone">
              <Typography variant="h2" gutterBottom>
                SPA
              </Typography>
              <Typography variant="p" gutterBottom>
                動作性を向上させるため、SPA（シングルページアプリケーション）で作成しました。
                <br />
                <br />
              </Typography>
              <Typography variant="h2" gutterBottom>
                UI
              </Typography>
              <Typography variant="p" gutterBottom>
                Material UIを使用することで開発のスピードを向上することができました。
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Top;
