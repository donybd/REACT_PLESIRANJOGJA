import DiscoverNav from "../../../components/DiscoverNav";

const BannerListBudaya = () => {
	return (
		<div className="hero-culture">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="hero-overlay"></div>
					</div>
				</div>
				<DiscoverNav/>
				<section className="hero-content text-white">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="text-start" style={{display: "inline-block", textAlign: "left"}}>Some cultures that are very popular in Jogja</h1>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default BannerListBudaya;