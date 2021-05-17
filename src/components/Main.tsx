import React from 'react';
import './Main.css';
import Heading from './Heading';
import ItemText from './ItemText';
import ItemLink from './ItemLink';

function Main() {
    return (
        <div className="Main">
            <h1>ysgraph.github.io</h1>
            <section id="name">
                <Heading heading="Name" />
                <ItemText 
                    myname="鈴木 雄大 / Yudai Suzuki"
                />
            </section>
            <section id="role">
                <Heading heading="Role" />
                <ItemText 
                    role="Product Designer"
                />
            </section>
            <section id="WorkExperience">
                <Heading heading="Work Experience" />
                <ItemText 
                    period="2021.4 -"
                    belonging="合同会社DMM.com"
                    summary="デザイナー"
                />
                <ItemText 
                    period="2020.8 - 2021.03"
                    belonging="株式会社Gracia（業務委託）"
                    summary="ギフトECサービス「TANP」UI/UX設計"
                    detail1="iOS App 新機能設計"
                    detail2="Web・iOS App グロース施策UI設計"
                    detail3="キャンペーンLP・クリエイティブ制作"
                />
                <ItemText 
                    period="2019.4 - 2020.5"
                    belonging="Micoworks株式会社（長期インターン）"
                    summary="digmee事業部 Web開発責任者"
                    detail1="定性・定量リサーチと体験設計"
                    detail2="目標KPI達成のための施策立案・仮説検証"
                    detail3="定量・定性データを活用したプロトタイピング・UI設計"
                />
                <ItemText 
                    period="2018.08 -"
                    belonging="UI/UXデザイン インターンシップ"
                    detail1="DeNA Co., Ltd."
                    detail2="Goodpatch Inc. / 最優秀賞"
                    detail3="Cookpad Inc."
                    detail4="freee K.K."
                    detail5="pixiv Inc."
                    detail6="Uzabase, Inc."
                />
                <ItemText 
                    period="2017.10 - 2019.03"
                    belonging="株式会社NPCコーポレーション"
                    summary="アルバイト / デザイナー"
                    detail1="DTP/グラフィックデザイン"
                    detail2="キャラクターデザイン"
                    detail3="ARモバイルアプリデザイン"
                />
            </section>
            <section id="Education">
                <Heading heading="Education" />
                <ItemText 
                    period="2015.4 - 2020.3"
                    belonging="関西学院大学 法学部"
                />
            </section>
            <section id="Social">
                <Heading heading="Social" />
                <ItemLink />
            </section>
        </div>
    )
}

export default Main;