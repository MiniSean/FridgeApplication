import html2pdf from 'html2pdf.js';

export function DownloadPdfButton () {
	const handleDownloadPdf = () => {
		const element = document.querySelector('.canvas-diagram');
		element.classList.add('double-view-height');

		const opt = {
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: {
				foreignObjectRendering: true,
				imageTimeout: 10000,
				// width: element.scrollWidth + 10000,
				// height: element.scrollHeight + 10000,
				// windowWidth: element.scrollWidth + 10000,
				// windowHeight: element.scrollHeight + 10000,
			},
			jsPDF: {
				unit: 'pt',
				format: [element.scrollHeight, element.scrollWidth],
				orientation: 'landscape',
				putOnlyUsedFonts: true,
			},
		};

		html2pdf()
			.from(element)
			.set(opt)
			.save('diagram.pdf')
			.finally(() => {
				element.classList.remove('double-view-height');
			});
	};

	return <button onClick={handleDownloadPdf}>Download PDF</button>
}