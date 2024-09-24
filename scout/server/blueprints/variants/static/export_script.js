document.getElementById('exportButton_vcf').addEventListener('click', function(e) {
  e.preventDefault();
  
  const form = document.getElementById('variantForm');
  const formData = new FormData(form);
  
  // VCF header
  let content = `##fileformat=VCFv4.2
##INFO=<ID=RANK,Number=1,Type=Float,Description="Rank Score">
##INFO=<ID=VRANK,Number=1,Type=Integer,Description="Variant Rank">
##INFO=<ID=CADD,Number=1,Type=Float,Description="CADD Score">
##INFO=<ID=HGNC,Number=.,Type=String,Description="HGNC Symbols">
#CHROM\tPOS\tID\tREF\tALT\tQUAL\tFILTER\tINFO\n`;
  
  const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(checkbox => {
    const row = checkbox.closest('tr');
    const cells = row.querySelectorAll('td');
    const displayName = cells[1].textContent;
    const [chrom, pos, ref, alt] = displayName.split('-');
    const rankScore = cells[3].textContent;
    const variantRank = cells[4].textContent;
    const caddScore = cells[5].textContent;
    const hgncSymbols = cells[6].textContent;
    
    content += `${chrom}\t${pos}\t.\t${ref}\t${alt}\t.\tPASS\tRANK=${rankScore};VRANK=${variantRank};CADD=${caddScore};HGNC=${hgncSymbols}\n`;
  });
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'variants.vcf');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});



/*
document.getElementById('exportButton_').addEventListener('click', function(e) {
    e.preventDefault();
    
    const form = document.getElementById('variantForm');
    const formData = new FormData(form);
    
    let content = 'Display Name,Category,Rank Score,Variant Rank,Cadd Score,HGNC Symbols\n';
    
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
      const row = checkbox.closest('tr');
      const cells = row.querySelectorAll('td');
      content += `${cells[1].textContent},${cells[2].textContent},${cells[3].textContent},${cells[4].textContent},${cells[5].textContent},${cells[6].textContent}\n`;
    });
    
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'variants.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
  */

