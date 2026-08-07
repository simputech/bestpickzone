import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const repoRoot = process.cwd();
const trackerPath = `${repoRoot}/BOOK_CONTENT_WORKFLOW_TRACKER_2026-08-07.md`;
const outputDir = `${repoRoot}/outputs/book-content-workflow-tracker-2026-08-07`;
const outputPath = `${outputDir}/book-content-workflow-tracker.xlsx`;
const trackerText = await fs.readFile(trackerPath, 'utf8');
const matches = [...trackerText.matchAll(/^\| (\d{2}) \| (\d+) \| `([^`]+)` \| (Pending|Approved|Needs fixes|Blocked) \|(.*)\|$/gm)];
const rows = matches.map((match) => [
  Number(match[1]),
  Number(match[2]),
  match[3],
  match[4],
  match[5].trim(),
]);

const wb = Workbook.create();
const dashboard = wb.worksheets.add('Progress');
const tracker = wb.worksheets.add('Route tracker');
const batches = wb.worksheets.add('Batch summary');
const reference = wb.worksheets.add('Workflow rules');

for (const sheet of [dashboard, tracker, batches, reference]) sheet.showGridLines = false;

dashboard.mergeCells('A1:F1');
dashboard.getRange('A1').values = [['BestPickZone book content workflow tracker']];
dashboard.getRange('A1:F1').format = {
  fill: '#172554', font: { bold: true, color: '#FFFFFF', size: 16 }, horizontalAlignment: 'center', verticalAlignment: 'center',
};
dashboard.getRange('A1:F1').format.rowHeight = 30;
dashboard.getRange('A3:B3').values = [['Metric', 'Value']];
dashboard.getRange('A3:B3').format = { fill: '#DBEAFE', font: { bold: true, color: '#172554' } };
dashboard.getRange('A4:A8').values = [['Routes inventoried'], ['Approved / complete'], ['Needs fixes'], ['Blocked'], ['Not started']];
dashboard.getRange('B4:B8').formulas = [
  ['=COUNTA(\'Route tracker\'!C2:C101)'],
  ['=COUNTIF(\'Route tracker\'!D2:D101,"Approved")'],
  ['=COUNTIF(\'Route tracker\'!D2:D101,"Needs fixes")'],
  ['=COUNTIF(\'Route tracker\'!D2:D101,"Blocked")'],
  ['=COUNTIF(\'Route tracker\'!D2:D101,"Pending")'],
];
dashboard.getRange('A3:B8').format.borders = { preset: 'all', style: 'thin', color: '#BFDBFE' };
dashboard.getRange('A4:A8').format.font = { bold: true, color: '#334155' };
dashboard.getRange('B4:B8').format = { fill: '#F8FAFC', font: { bold: true, color: '#0F172A' }, horizontalAlignment: 'right' };
dashboard.getRange('A10:F10').values = [[
  'Current release gate', 'Every dynamic route must have one non-duplicative decision path, topic-only reader copy, tracked Amazon CTAs, and a passing workflow audit before deployment.', '', '', '', '',
]];
dashboard.mergeCells('B10:F10');
dashboard.getRange('A10:F10').format = { fill: '#FEF3C7', font: { color: '#78350F' }, wrapText: true, verticalAlignment: 'center' };
dashboard.getRange('A10').format.font = { bold: true, color: '#78350F' };
dashboard.getRange('A10:F10').format.rowHeight = 42;
dashboard.getRange('A1:F10').format.borders = { preset: 'outside', style: 'thin', color: '#CBD5E1' };
dashboard.getRange('A:A').format.columnWidth = 24;
dashboard.getRange('B:B').format.columnWidth = 18;
dashboard.getRange('C:F').format.columnWidth = 16;

tracker.getRange('A1:F1').values = [['Batch', 'Route #', 'Canonical path', 'Workflow status', 'Audit / remediation note', 'Validated on']];
tracker.getRange(`A2:F${rows.length + 1}`).values = rows.map((row) => [...row, '']);
tracker.getRange('A1:F1').format = { fill: '#172554', font: { bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center' };
tracker.getRange(`A1:F${rows.length + 1}`).format.borders = { preset: 'inside', style: 'thin', color: '#E2E8F0' };
tracker.getRange(`A2:B${rows.length + 1}`).format.horizontalAlignment = 'center';
tracker.getRange(`C2:C${rows.length + 1}`).format.font = { color: '#1D4ED8' };
tracker.getRange(`E2:E${rows.length + 1}`).format.wrapText = true;
tracker.getRange(`F2:F${rows.length + 1}`).format.numberFormat = 'yyyy-mm-dd';
tracker.getRange('A:A').format.columnWidth = 10;
tracker.getRange('B:B').format.columnWidth = 10;
tracker.getRange('C:C').format.columnWidth = 42;
tracker.getRange('D:D').format.columnWidth = 18;
tracker.getRange('E:E').format.columnWidth = 54;
tracker.getRange('F:F').format.columnWidth = 16;
tracker.freezePanes.freezeRows(1);
tracker.getRange(`D2:D${rows.length + 1}`).dataValidation = { rule: { type: 'list', values: ['Pending', 'Approved', 'Needs fixes', 'Blocked'] } };

batches.getRange('A1:E1').values = [['Batch', 'Routes', 'Approved', 'Needs fixes / blocked', 'Release status']];
const batchRows = Array.from({ length: 10 }, (_, index) => {
  const row = index + 2;
  return [index + 1, '', '', '', ''];
});
batches.getRange('A2:E11').values = batchRows;
for (let i = 2; i <= 11; i += 1) {
  batches.getRange(`B${i}`).formulas = [[`=COUNTIF('Route tracker'!$A$2:$A$101,A${i})`]];
  batches.getRange(`C${i}`).formulas = [[`=COUNTIFS('Route tracker'!$A$2:$A$101,A${i},'Route tracker'!$D$2:$D$101,"Approved")`]];
  batches.getRange(`D${i}`).formulas = [[`=COUNTIFS('Route tracker'!$A$2:$A$101,A${i},'Route tracker'!$D$2:$D$101,"Needs fixes")+COUNTIFS('Route tracker'!$A$2:$A$101,A${i},'Route tracker'!$D$2:$D$101,"Blocked")`]];
  batches.getRange(`E${i}`).formulas = [[`=IF(C${i}=B${i},"Ready for release",IF(D${i}>0,"Fixes required","Audit in progress"))`]];
}
batches.getRange('A1:E1').format = { fill: '#172554', font: { bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center' };
batches.getRange('A1:E11').format.borders = { preset: 'all', style: 'thin', color: '#CBD5E1' };
batches.getRange('A2:D11').format.horizontalAlignment = 'center';
batches.getRange('A:A').format.columnWidth = 12;
batches.getRange('B:D').format.columnWidth = 18;
batches.getRange('E:E').format.columnWidth = 25;

reference.getRange('A1:B1').values = [['Rule', 'Definition']];
reference.getRange('A2:B6').values = [
  ['Duplication', 'Do not repeat the same book description, reader fit, and tradeoff in a visual card and then again in the full review.'],
  ['Relevance', 'Public copy must help the reader choose a book for the page topic; remove SEO, analytics, conversion, workflow, or editorial-process language.'],
  ['Amazon CTA', 'Use the existing tracked affiliate path, clear current-availability wording, 44px minimum target, sponsored/nofollow rel, and FTC disclosure.'],
  ['Content workflow', 'Audit intent, specificity, contamination, metadata/schema consistency, links, disclosure, CTA, and template behavior before approval.'],
  ['Release', 'Publish only after all ten batches pass, scoped validation succeeds, the sitemap resolves, and live routes are verified.'],
];
reference.getRange('A1:B1').format = { fill: '#172554', font: { bold: true, color: '#FFFFFF' } };
reference.getRange('A1:B6').format.borders = { preset: 'all', style: 'thin', color: '#CBD5E1' };
reference.getRange('A2:B6').format.wrapText = true;
reference.getRange('A:A').format.columnWidth = 22;
reference.getRange('B:B').format.columnWidth = 95;
reference.getRange('A2:B6').format.rowHeight = 42;

const inspect = await wb.inspect({ kind: 'table', range: 'Route tracker!A1:F12', include: 'values,formulas', tableMaxRows: 12, tableMaxCols: 6 });
if (!inspect.ndjson.includes('/books/best-stephen-king-books')) throw new Error('Tracker route inventory did not load.');
const errors = await wb.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A', options: { useRegex: true, maxResults: 50 }, summary: 'formula error scan' });
if (errors.ndjson.includes('#REF!') || errors.ndjson.includes('#DIV/0!')) throw new Error(`Formula error scan failed: ${errors.ndjson}`);
const preview = await wb.render({ sheetName: 'Progress', range: 'A1:F10', scale: 1.5 });
await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(`${outputDir}/preview.png`, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(outputPath);
console.log(outputPath);
