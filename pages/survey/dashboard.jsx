"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
	Card,
	Grid,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Title,
	Subtitle,
	BarChart,
	Button,
} from "@tremor/react";




const chartdata = [
	{
		name: "Amphibians",
		"Number of threatened species": 2488,
	},
	{
		name: "Birds",
		"Number of threatened species": 1445,
	},
	{
		name: "Crustaceans",
		"Number of threatened species": 743,
	},
	{
		name: "Ferns",
		"Number of threatened species": 281,
	},
	{
		name: "Arachnids",
		"Number of threatened species": 251,
	},
	{
		name: "Corals",
		"Number of threatened species": 232,
	},
	{
		name: "Algae",
		"Number of threatened species": 98,
	},
];

async function fetchRespostas() {
    const r1 = await fetch(`/api/manipulaSurvey`, { method: "GET", });
    const r2 = await r1.json();
    return r2;
}

export default function DashboardExample() {
	const [respostas, setRespostas] = useState({});
	const router = useRouter()
	useEffect(() => {
        fetchRespostas().then((n) => { setRespostas(n); });
    }, );

    console.log(respostas);
	return (
		<main className="p-12">
			<Button icon={ArrowLeftIcon} onClick={() => router.push("/")}>Voltar</Button>
			<Title>Survey Dashboard</Title>

			<TabGroup className="mt-6">
				<TabList>
					<Tab>Needs Assessment</Tab>
					<Tab>Feature Prioritization</Tab>
					<Tab>User Experience and Interface</Tab>
					<Tab>Integration and Scalability</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
						</Grid>
						<div className="mt-6">
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
						</Grid>
					</TabPanel>
					<TabPanel>
						<div className="mt-6">
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
						</div>
						<Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
						</Grid>
					</TabPanel>
					<TabPanel>
						<Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
							<Card>
								<Title>Number of species threatened with extinction (2021)</Title>
								<Subtitle>
									The IUCN Red List has assessed only a small share of the total known species in the world.
								</Subtitle>
								<BarChart
									className="mt-6"
									data={chartdata}
									index="name"
									categories={["Number of threatened species"]}
									colors={["blue"]}
									yAxisWidth={48}
								/>
							</Card>
						</Grid>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</main>
	);
}