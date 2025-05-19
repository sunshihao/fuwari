const demoBanner = new Proxy({"src":"/_astro/demo-banner.D4N9JVSd.webp","width":1344,"height":896,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ssh/Home/workspace/Blog/astro/fuwari/src/assets/images/demo-banner.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/ssh/Home/workspace/Blog/astro/fuwari/src/assets/images/demo-banner.webp");
							return target[name];
						}
					});

export { demoBanner as default };
