const fs = require('fs');
const path = require('path');
const parser = require('xml2json');
const format_xml = require('xml-formatter');
const resultsDirPath = path.join(__dirname, '../../../reports/results');
const xmlResultsPath = path.join(resultsDirPath, '/results.xml');
/**
 * Gets all the .xml files from the /results folder
 * @return {Array} List of all .xml files
 */
const getXmlFiles = () =>
  new Promise((resolve, reject) => {
    fs.readdir(resultsDirPath, (err, files) => {
      if (err) reject(err);
      const xmls = files.filter(file => path.extname(file) === '.xml');
      resolve(xmls);
    });
  });

/**
 * Reads a file and returns it's content in utf8 format
 * @param {string} filePath Path of the file to be read
 */
const readFile = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(reject(err));
      else resolve(data);
    });
  });

/**
 * Appends data to the results.xml file
 * If file doesn't exist, it will create it
 * If it exists and has data, it will append more data from the next row
 * @param {string} data Data to be written
 */
const writeFile = data => {
  fs.appendFile(xmlResultsPath, format_xml(parser.toXml(data)), 'utf8', err => {
    if (err) throw err;
  });
};

/**
 * @module buildXmlReport
 * Nightwatch creates a separate XML results file for every test file
 * Results are created into /reports/results/
 * This module takes the results from all .xml files
 * and creates a single results file, /reports/results/results.xml
 */
module.exports = async function buildXmlReport() {
  const testsuite = [];
  let total = 0;
  let fails = 0;
  let errors = 0;
  let skipped = 0;
  const results = {};
  const fileslist = await getXmlFiles();
  for (const file of fileslist) {
    const json = parser.toJson(
      await readFile(path.join(resultsDirPath, `/${file}`)),
      { object: true },
    );
    total += Number(json.testsuites.testsuite.tests);
    skipped += Number(json.testsuites.testsuite.skipped);
    errors += Number(json.testsuites.testsuite.errors);
    fails += Number(json.testsuites.testsuite.fails);
    testsuite.push(json.testsuites.testsuite);
  }
  results.testsuites = { total, skipped, errors, testsuite };
  writeFile(results);
};
