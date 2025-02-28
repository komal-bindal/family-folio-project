//tree
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import Card from "./Card";
import ReactDOMServer from "react-dom/server";

const FamilyTreeComp: React.FC<FamilyTreeCompProps> = ({ data, maxHeight }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const treeHeight = data.length * 200;
    const treeWidth = maxHeight * 300 + 200;

    svg.selectAll("*").remove();

    try {
      const stratify = d3
        .stratify()
        .id((d: any) => d.name)
        .parentId((d: any) => d.parent);

      const root = stratify(data).sort(
        (a, b) => a.height - b.height || a.id.localeCompare(b.id)
      );

      const xOffset = 200;
      root.x0 = treeHeight / 2;
      root.y0 = xOffset;

      const treeLayout = d3.tree().size([treeHeight, treeWidth]);

      const update = (source: any) => {
        const treeData = treeLayout(root);

        const nodes = treeData.descendants().reverse();
        const links = treeData.links();

        nodes.forEach((d: any) => {
          d.y = d.depth * 300 + xOffset;
        });

        svg
          .selectAll("path.dashed-line")
          .data(nodes)
          .enter()
          .append("path")
          .attr("class", "dashed-line")
          .attr("stroke", "grey")
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "4 4")
          .attr("d", (d: any) => {
            return `M${d.y},${source.y0 - 200} V${treeHeight}`;
          });

        const node = svg
          .selectAll("g.node")
          .data(nodes, (d: any) => d.id || (d.id = ++i));

        const nodeEnter = node
          .enter()
          .append("g")
          .attr("class", "node")
          .attr("transform", (d: any) => `translate(${source.y0},${source.x0})`)
          .on("click", click);

        nodeEnter
          .append("foreignObject")
          .attr("width", 200)
          .attr("height", 200)
          .attr("x", (d: any) => (d.children || d._children ? -100 : -100))
          .attr("y", -100)
          .html((d: any) => {
            const htmlString = ReactDOMServer.renderToString(
              <Card name={d.data.name} />
            );
            return `<div>${htmlString}</div>`;
          });

        const nodeUpdate = nodeEnter.merge(node);

        nodeUpdate
          .transition()
          .duration(200)
          .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

        const nodeExit = node
          .exit()
          .transition()
          .duration(200)
          .attr("transform", (d: any) => `translate(${source.y},${source.x})`)
          .remove();

        const link = svg
          .selectAll("path.link")
          .data(links, (d: any) => d.target.id);

        const linkEnter = link
          .enter()
          .insert("path", "g")
          .attr("class", "link")
          .style("fill", "none")
          .style("stroke", "red")
          .style("stroke-width", "2px")
          .attr("d", (d: any) => {
            const o = { x: source.x0, y: source.y0 };
            return diagonal(o, o);
          });

        const linkUpdate = linkEnter.merge(link);

        linkUpdate
          .transition()
          .duration(200)
          .attr("d", (d: any) => diagonal(d.source, d.target));

        link
          .exit()
          .transition()
          .duration(200)
          .attr("d", (d: any) => {
            const o = { x: source.x, y: source.y };
            return diagonal(o, o);
          })
          .remove();

        nodes.forEach((d: any) => {
          d.x0 = d.x;
          d.y0 = d.y;
        });

        function diagonal(s: any, d: any) {
          return `M${s.y},${s.x}C${(s.y + d.y) / 2},${s.x} ${(s.y + d.y) / 2},${
            d.x
          } ${d.y},${d.x}`;
        }

        function click(event: any, d: any) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update(d);
        }
      };

      let i = 0;
      update(root);
    } catch (error) {
      console.error("Error stratifying data:", error);
    }
  }, [data, maxHeight]);

  const height = data.length * 200;
  const width = maxHeight * 300 + 200;

  return (
    <svg
      ref={svgRef}
      width={`${width}px`}
      height={`${height}px`}
      className="transform rotate-90 scale-50 overflow-hidden"
    ></svg>
  );
};

interface FamilyTreeCompProps {
  data: Array<Object>;
  maxHeight: Number;
}

export default FamilyTreeComp;

//graph
// import { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import ReactDOMServer from "react-dom/server";
// import Card from "./Card";

// const FamilyTreeComp: React.FC<FamilyTreeCompProps> = ({ data, maxHeight }) => {
//   const svgRef = useRef<SVGSVGElement | null>(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     const width = maxHeight * 300 + 200;
//     const height = data.length * 200;

//     svg.selectAll("*").remove();

//     try {
//       // Convert hierarchical data to graph data format (nodes and links)
//       const graphData = data.reduce(
//         (acc, person) => {
//           acc.nodes.push({ id: person.name });
//           if (person.parent) {
//             acc.links.push({ source: person.parent, target: person.name });
//           }
//           return acc;
//         },
//         { nodes: [], links: [] }
//       );

//       // Create force simulation for the graph
//       const simulation = d3
//         .forceSimulation(graphData.nodes)
//         .force(
//           "link",
//           d3
//             .forceLink(graphData.links)
//             .id((d: any) => d.id)
//             .distance(200)
//         )
//         .force("charge", d3.forceManyBody().strength(-500))
//         .force("center", d3.forceCenter(width / 2, height / 2));

//       // Create links
//       const link = svg
//         .selectAll(".link")
//         .data(graphData.links)
//         .enter()
//         .append("line")
//         .attr("class", "link")
//         .style("stroke", "grey")
//         .style("stroke-width", 1);

//       // Create nodes
//       const node = svg
//         .selectAll(".node")
//         .data(graphData.nodes)
//         .enter()
//         .append("g")
//         .attr("class", "node")
//         .attr("transform", (d: any) => `translate(${d.x}, ${d.y})`)
//         .call(
//           d3
//             .drag()
//             .on("start", dragStart)
//             .on("drag", dragged)
//             .on("end", dragEnd)
//         );

//       node.append("circle").attr("r", 20).attr("fill", "#69b3a2");

//       // Add text to each node
//       node
//         .append("text")
//         .attr("x", 25)
//         .attr("y", 5)
//         .text((d: any) => d.id);

//       // Create force simulation
//       simulation.on("tick", () => {
//         // Update links
//         link
//           .attr("x1", (d: any) => d.source.x)
//           .attr("y1", (d: any) => d.source.y)
//           .attr("x2", (d: any) => d.target.x)
//           .attr("y2", (d: any) => d.target.y);

//         // Update nodes
//         node.attr("transform", (d: any) => `translate(${d.x}, ${d.y})`);
//       });

//       function dragStart(event: any, d: any) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         d.fx = d.x;
//         d.fy = d.y;
//       }

//       function dragged(event: any, d: any) {
//         d.fx = event.x;
//         d.fy = event.y;
//       }

//       function dragEnd(event: any, d: any) {
//         if (!event.active) simulation.alphaTarget(0);
//         d.fx = null;
//         d.fy = null;
//       }
//     } catch (error) {
//       console.error("Error rendering family tree:", error);
//     }
//   }, [data, maxHeight]);

//   return (
//     <svg
//       ref={svgRef}
//       width={maxHeight * 300 + 200}
//       height={data.length * 200}
//       className="transform  scale-50 overflow-hidden"
//     ></svg>
//   );
// };

// interface FamilyTreeCompProps {
//   data: Array<{ name: string; parent?: string }>;
//   maxHeight: number;
// }

// export default FamilyTreeComp;
