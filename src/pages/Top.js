import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Typography,
  // Card,
  Divider,
} from '@material-ui/core';
// 追加分
import WeatherApp from 'src/components/Weather/Weather';
// ニューモフィズム----------
import {
  Card, CardContent, Button
} from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import ReactPlayer from 'react-player';
// -----------------------
import Lottie from 'lottie-react-web';
import QPayMovie from './qpay.mp4';
import animation from './key_animation.json';
import animation2 from './star_anim.json';
import animation3 from './motion_graphics.json';
import animation5 from './complete.json';

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
        marginTop: -3,
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
                    borderRadius: 30,
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
                  <br />
                  このアプリケーションはアニメーションで「今日の天気」と「長袖か半袖を着るべきか」が、わかるアプリケーションです。
                  <br />
                  <br />
                  気温によってキャラクターの服装が切り替わります。
                  <br />
                  <br />
                  天気によって空のアニメーションが切り替わります。
                  <br />
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
            <img src={`${process.env.PUBLIC_URL}/static/images/other/screenPwa.jpg`} width="100%" alt="img" />
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
            style={{ marginTop: 20 }}
          >
            <Card className="cardDecoNone">
              <Typography variant="h2" gutterBottom>
                3DCG
              </Typography>
              <Typography variant="p" gutterBottom>
                アプリケーション内の女性キャラクターは3DCGソフト（Blender）を使用して作成しました。
                モデリングからアニメーションまで作成可能です。
                <br />
                <br />
              </Typography>
              <Typography variant="h2" gutterBottom>
                AfterEffects
              </Typography>
              <Typography variant="p" gutterBottom>
                「くもり」「晴れ」「雨」の素材はAfterEffectsを使用して作成しました。
              </Typography>
            </Card>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
            style={{ marginTop: 20 }}
          >
            <img src={`${process.env.PUBLIC_URL}/static/images/other/screenWeatherWoman.jpg`} width="100%" alt="img" />
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              marginTop: 3,
              marginLeft: 1
            }}
          >
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
                <img src={`${process.env.PUBLIC_URL}/static/images/other/screenSky.png`} width="100%" style={{ padding: 7, borderRadius: 10 }} alt="img" />
              </Card>
            </Grid>
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
                <img src={`${process.env.PUBLIC_URL}/static/images/other/screenRain.png`} width="100%" style={{ padding: 7, borderRadius: 10 }} alt="img" />
              </Card>
            </Grid>
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
                <img src={`${process.env.PUBLIC_URL}/static/images/other/screenCloud2.png`} width="100%" style={{ padding: 7, borderRadius: 10 }} alt="img" />
              </Card>
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            style={{ marginTop: 70 }}
          >
            <a
              href="https://apps.apple.com/jp/app/qpay/id1590256862"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card
                className="sectionTop"
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h1" component="h2" gutterBottom>
                    <br />
                    ポイント決済アプリ
                    /
                    QPay
                    <br />
                    <br />
                  </Typography>
                  <CardContent>
                    <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <Grid
                        item
                        lg={5}
                        md={5}
                        xl={12}
                        xs={12}
                      >
                        <Card
                          inset
                          style={{ padding: 13, marginBottom: 30 }}
                        >
                          <ReactPlayer
                            // className={}
                            url={QPayMovie}
                            width="100%"
                            height="auto"
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
                          />
                        </Card>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={12}
                        xl={12}
                        xs={12}
                      >
                        <CardContent>
                          <Typography
                            style={{
                              textAlign: 'left',
                            }}
                            variant="body1"
                            gutterBottom
                          >
                            QRコードを読み取りポイント決済出来るアプリです。
                            <br />
                            <br />
                            デザインから設計・実装まで担当しReactNativeで作成しました。
                            <br />
                            <br />
                            iOSとAndroidでQRコード読み取りの際、Androidのみノイズによる読み取りエラー
                            が出るためReact Nativeでノイズ除去を実装しております。
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
                            Lottie
                          </Typography>
                          <Typography
                            style={{
                              textAlign: 'left',
                              padding: 10
                            }}
                            variant="body1"
                            gutterBottom
                          >
                            トップページと完了画面のアニメーションはLottieを使用しております。
                            <br />
                            <br />
                          </Typography>
                          <CardContent
                            style={{
                              backgroundColor: 'unset',
                              paddingTop: 10,
                              paddingBottom: 10,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                pt: 3
                              }}
                            >
                              <a
                                style={{ margin: 'auto' }}
                                href="https://apps.apple.com/jp/app/qpay/id1590256862"
                                target="blank"
                              >
                                <Button
                                  color="primary"
                                  component="a"
                                  href="https://apps.apple.com/jp/app/qpay/id1590256862"
                                  variant="contained"
                                >
                                  IOS
                                </Button>
                              </a>
                              <a
                                style={{ margin: 'auto' }}
                                href="https://play.google.com/store/apps/details?id=jp.qualiapk"
                                target="blank"
                              >
                                <Button
                                  color="primary"
                                  component="a"
                                  href="https://play.google.com/store/apps/details?id=jp.qualiapk"
                                  variant="contained"
                                >
                                  Android
                                </Button>
                              </a>
                            </Box>
                          </CardContent>
                        </CardContent>
                      </Grid>
                    </Box>
                  </CardContent>
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
            style={{ marginTop: 70 }}
          >
            <a
              href="https://car-color-change.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
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
                <CardContent
                  style={{
                    backgroundColor: 'unset',
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      pt: 3
                    }}
                  >
                    <a
                      style={{ margin: 'auto' }}
                      href="https://car-color-change.herokuapp.com/"
                      target="blank"
                    >
                      <Button
                        color="primary"
                        component="a"
                        href="https://car-color-change.herokuapp.com/"
                        variant="contained"
                      >
                        LINK
                      </Button>
                    </a>
                  </Box>
                </CardContent>
              </Card>
            </a>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
            style={{ marginTop: 70 }}
          >
            <Card className="sectionTop">
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h2" gutterBottom>
                  <br />
                  Web Animation
                  <br />
                  <br />
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Grid
                    item
                    lg={6}
                    md={12}
                    xl={12}
                    xs={12}
                  >
                    <Lottie
                      options={{
                        animationData: animation
                      }}
                    />
                  </Grid>
                  <Divider orientation="vertical" flexItem style={{ background: 'rgb(16 2 117 / 30%)' }} />
                  <Grid
                    item
                    lg={6}
                    md={12}
                    xl={12}
                    xs={12}
                  >
                    <div style={{ margin: 30 }}>
                      <Lottie
                        style={{ background: '#002329' }}
                        options={{
                          animationData: animation2
                        }}
                      />
                    </div>
                  </Grid>
                </div>
                <Divider style={{ width: '85%', margin: 'auto', background: 'rgb(16 2 117 / 30%)' }} />
                <div style={{ display: 'flex' }}>
                  <Grid
                    item
                    lg={6}
                    md={12}
                    xl={12}
                    xs={12}
                  >
                    <Lottie
                      style={{ padding: 15, width: '80%' }}
                      options={{
                        animationData: animation3
                      }}
                    />
                  </Grid>
                  <Divider orientation="vertical" flexItem style={{ background: 'rgb(16 2 117 / 30%)' }} />
                  <Grid
                    item
                    lg={6}
                    md={12}
                    xl={12}
                    xs={12}
                  >
                    <Lottie
                      style={{ padding: 15, width: '50%' }}
                      options={{
                        animationData: animation5
                      }}
                    />
                  </Grid>
                </div>
                <Typography style={{ textAlign: 'left', padding: 10 }} variant="h2" gutterBottom>
                  <br />
                  <br />
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
            style={{ marginTop: 70 }}
          >
            <Card className="sectionTop cardDecoNone">
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h2" gutterBottom>
                  このポートフォリオについて
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'left' }}>
                  <br />
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
            <img src={`${process.env.PUBLIC_URL}/static/images/other/materialUiList.jpg`} width="100%" alt="img" />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Card className="cardDecoNone" style={{ marginBottom: 100 }}>
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
