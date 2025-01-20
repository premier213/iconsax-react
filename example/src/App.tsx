import { Hero } from "@/module/hero/animated-hero";
import GridPattern from "./components/ui/pattern";
import { IconGrid } from "./module/icon-grid";
import { Install } from "./module/install";
import { Topbar } from "./module/topbar";

function App() {
	return (
		<div className="overflow-hidden">
			<GridPattern />
			<Topbar />
			<Hero />
			<Install />
			<IconGrid />
		</div>
	);
}

export default App;
